const Signin = require('../models/signin')
const {
  successResponse,
  failResponse,
  errorResponse,
} = require('../helpers/httpResponse')

const signin = async (req, res) => {
  try {
    let response = await Signin.createUser(req.body)
    if (response.affectedRows != 0) {
      res.json(successResponse())
    } else {
      res.json(failResponse('No se pudo registrar usuario'))
    }
  } catch (error) {
    res.status(500).json(errorResponse(`Al registrar usuario, ${error}`))
  }
}

module.exports = { signin }
