const { pool } = require('../databases/car_shop')
const createUser = async ({ name, email, password }) => {
  const response = await pool.query(
    `insert into USER(name, email, password) 
        values('${name}', '${email}', '${password}')`
  )
  return response
}

module.exports = { createUser }
