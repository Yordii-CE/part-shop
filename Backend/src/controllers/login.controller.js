const Login = require('../models/login')
const jwt = require('../helpers/jwt')
const {
  successResponse,
  failResponse,
  errorResponse,
} = require('../helpers/httpResponse')

const login = async (req, res) => {
  try {
    let user = await Login.getUser(req.body)
    if (user) {
      const token = jwt.sign(user)
      res.json(successResponse({ token }))
    } else {
      res.json(failResponse('El usuario no existe. Token no obtenido'))
    }
  } catch (error) {
    res
      .status(500)
      .json(errorResponse(`Al iniciar sesion de usuario, ${error}`))
  }
}

module.exports = { login }
