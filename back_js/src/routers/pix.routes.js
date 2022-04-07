const { Router } = require('express')
//const userAuthenticated = require('../middlewares/userAuthenticated')
const PixController = require('../main/resource/pix/pix.controllers')

const pixRouter = Router()
const pixController = new PixController()

//pixRouter.use(userAuthenticated)

pixRouter.post('/request', pixController.request)
pixRouter.post('/pay/:key', pixController.pay)
pixRouter.get('/transactions', pixController.transactions)

module.exports = pixRouter