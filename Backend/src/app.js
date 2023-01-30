const express = require('express')
const cors = require('cors')
const createEndpoint = require('./helpers/resource')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Store
app.use(
  '/server',
  createEndpoint('sales', 'SALE', {
    get: 'GET_SALES()',
  })
)
app.use(
  '/server',
  createEndpoint('quotations', 'QUOTATION', {
    get: 'GET_QUOTATIONS()',
  })
)
app.use(
  '/server',
  createEndpoint('repayments', 'REPAYMENT', {
    get: 'GET_REPAYMENT()',
  })
)

//Product
app.use(
  '/server',
  createEndpoint('products', 'PRODUCT', {
    get: 'GET_PRODUCTS()',
  })
)
app.use('/server', createEndpoint('brands', 'BRAND', {}))
app.use('/server', createEndpoint('models', 'MODEL'))
app.use('/server', createEndpoint('classifications', 'CLASSIFICATION'))

//Admin
app.use('/server', createEndpoint('clients', 'CLIENT'))
app.use('/server', createEndpoint('employees', 'EMPLOYEE'))
app.use('/server', createEndpoint('providers', 'PROVIDER'))

//Ticket
app.use(
  '/server',
  createEndpoint('tickets', 'TICKET', {
    get: 'GET_TICKETS()',
  })
)

//Others
app.use('/server', require('./routes/'))

module.exports = app
