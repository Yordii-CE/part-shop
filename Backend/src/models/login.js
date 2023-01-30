const { pool } = require('../databases/car_shop')
const getUser = async ({ email, password }) => {
  let result = await pool.query(
    `select * from USER where email = '${email}' and password = '${password}'`
  )

  return result.lenght == 0 ? null : result[0]
}

module.exports = { getUser }
