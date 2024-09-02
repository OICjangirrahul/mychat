import { Router } from "express";
import AuthController from "../controllers/AuthController.js"
const router = Router()

//auth login
router.post("/auth/login", AuthController.login)

export default router