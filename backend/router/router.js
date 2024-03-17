import express from "express"

import {postRegisterInstitute} from "../controllers/controller.js"

let router = express()

router.post("/api/register-institute",postRegisterInstitute)

export default router