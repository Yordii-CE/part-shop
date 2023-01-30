const express = require('express')
const auth = require('../middlewares/auth')
const jwt = require('./jwt')
const { JsonWebTokenError } = require('jsonwebtoken')
const {
  successResponse,
  failResponse,
  errorResponse,
} = require('./httpResponse')
const { pool } = require('../databases/car_shop')

const getTableFields = async (table) => {
  let results = await pool.query(`SHOW COLUMNS FROM ${table}`)

  let fields = results
    .map((el) => ({ name: el.Field, type: el.Type }))
    .filter((el) => el.name != 'id')
  return fields
}

const formatFieldsForInsert = (fields) => {
  let formatedForInsert = ''
  for (const value of fields) {
    formatedForInsert += value + ', '
  }
  formatedForInsert = formatedForInsert.substring(
    0,
    formatedForInsert.length - 2
  )
  return formatedForInsert
}

const formatValuesForInsert = (fields, body) => {
  let formatedForInsert = ''
  for (const field of fields) {
    let fieldName = field.name
    let fieldType = field.type
    if (['int', 'float'].includes(fieldType)) {
      formatedForInsert += `${body[fieldName]}, `
    } else {
      formatedForInsert += `'${body[fieldName]}', `
    }
  }
  formatedForInsert = formatedForInsert.substring(
    0,
    formatedForInsert.length - 2
  )
  return formatedForInsert
}

const formatValuesForUpdate = (fields, body) => {
  let formatedForUpdate = ''
  for (const field of fields) {
    if (!body.hasOwnProperty(field.name)) continue
    let fieldName = field.name
    let fieldType = field.type
    if (['int', 'float'].includes(fieldType)) {
      formatedForUpdate += `${fieldName} = ${body[fieldName]}, `
    } else {
      formatedForUpdate += `${fieldName} = '${body[fieldName]}', `
    }
  }
  //trim last ', '
  formatedForUpdate = formatedForUpdate.substring(
    0,
    formatedForUpdate.length - 2
  )
  return formatedForUpdate
}
const compareValues = (fields, body) => {
  for (const field of fields) {
    let fieldName = field.name
    if (!body.hasOwnProperty(fieldName)) return false
  }

  return true
}
const createEndpoint = (name, table, procedures = {}) => {
  const router = express.Router()

  router.get(`/${name}`, auth, async (req, res) => {
    try {
      const auth = jwt.verify(req.token)

      let fields = await pool.query(`SHOW COLUMNS FROM ${table}`)
      fields = fields.map((el) => ({ name: el.Field, type: el.Type }))

      if (procedures.get) {
        let results = await pool.query(`call ${procedures.get}`)
        res.json(successResponse({ fields, [name]: results[0] }))
      } else {
        let results = await pool.query(`select * from ${table}`)
        res.json(successResponse({ fields, [name]: results }))
      }
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        res.json(failResponse(`Token invalido al obtener ${name}`))
        return
      }
      res.json(errorResponse(`Al obtener ${name}`))
    }
  })
  router.post(`/${name}`, auth, async (req, res) => {
    try {
      const auth = jwt.verify(req.token)
      let fields = await getTableFields(table)
      let queryFields = formatFieldsForInsert(fields.map((el) => el.name))
      if (!compareValues(fields, req.body)) {
        res.json(`No se enviaron todos los campos: ${queryFields}`)
        return
      }
      let queryValues = formatValuesForInsert(fields, req.body)

      let sql = `insert into ${table} (${queryFields}) values (${queryValues})`

      const response = await pool.query(sql)
      if (response.affectedRows != 0) {
        res.json(successResponse())
      } else {
        res.json(failResponse(`No se pudo crear ${name}`))
      }
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        res.json(failResponse(`Token invalido al crear ${name}`))
        return
      }
      res.json(errorResponse(`Al crear ${name}` + error))
    }
  })
  router.put(`/${name}/:id`, auth, async (req, res) => {
    try {
      const auth = jwt.verify(req.token)
      let fields = await getTableFields(table)
      let queryValues = formatValuesForUpdate(fields, req.body)
      let sql = `update ${table} set ${queryValues} where id = ${req.params.id}`

      const response = await pool.query(sql)
      if (response.affectedRows != 0) {
        res.json(successResponse())
      } else {
        res.json(failResponse(`No se pudo actualizar un ${name}`))
      }
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        res.json(failResponse(`Token invalido al actualizar un ${name}`))
        return
      }
      res.json(errorResponse(`Al actualizar un ${name}` + error))
    }
  })
  router.delete(`/${name}/:id`, auth, async (req, res) => {
    try {
      const auth = jwt.verify(req.token)

      const response = await pool.query(
        `delete from ${table} where id = ${req.params.id}`
      )

      if (response.affectedRows != 0) {
        res.json(successResponse())
      } else {
        res.json(failResponse(`No se pudo eliminar un ${name}`))
      }
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        res.json(failResponse(`Token invalido al eliminar un ${name}`))
        return
      }
      res.json(errorResponse(`Al eliminar ${name}` + error))
    }
  })

  return router
}

module.exports = createEndpoint
