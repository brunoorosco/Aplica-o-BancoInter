import 'express-async-errors'
import express from "express"
import { createConnection } from "typeorm"
import cors from 'cors'

import routes from "./routes";
import { globalErrors } from "./middlewares/globalErros";

createConnection().then(connection => {


    const app = express()
    const PORT = 3333

    app.use(cors())
    app.use(express.json())
    app.use(routes)

    app.use(globalErrors)

    app.listen(PORT, () => {
        console.log(`>> [server] = Server is running at http://localhost:${PORT}`)
    })

}).catch((error) => {
    console.log("unable to connect to the database", error)
})
