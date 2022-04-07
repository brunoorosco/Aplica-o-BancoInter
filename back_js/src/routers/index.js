const { Router } = require('express')
const pixRoutes = require('./pix.routes')
const userRoutes = require('./user.routes')

const routes = Router()

routes.use('/pix', pixRoutes)
//routes.use('/user', userRoutes)


module.exports = routes