import express  from "express";
import dotenv from "dotenv"
import router from "./router/router.js";
import bodyParser from "body-parser";
import cors from "cors"

dotenv.config({path:"./config.env"})

const app = express()

let port = process.env.PORT || 5001

let corsOption = {
    origin : process.env.REMOTE_ORIGIN,
    credential : true
}

app.use(cors(corsOption))

app.use(bodyParser.json())

app.use(router)

app.listen(port,()=>{
    console.log(`server is running on port ${port} | http://localhost:${port} !`)
})