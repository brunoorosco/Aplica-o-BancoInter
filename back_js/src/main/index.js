const typeorm = require("typeorm");
const express = require('express');
const { connect } = require('../routers');
require('dotenv').config();
const PORT = process.env.PORT || 3333
const routes = require('../routers')


typeorm.createConnection().then(connection => {

    const app = express()
    app.use(express.json())
    app.use(routes)

    app.listen(PORT, () => {
        console.log(`>> [server] = Server is running at http://localhost:${PORT}`)
    })
})
    .catch((error) => {
        console.log("unable to connect to the database", error)
    })