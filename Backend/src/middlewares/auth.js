//Authorization: Bearer <token>
const auth = (req, res, next) => {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1]

    req.token = token
    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = auth
