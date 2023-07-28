const express=require('express')
import { login, register } from "../Controllers/User"
import isAuth from "../Middleware/IsAuth"
import { loginValidation, registerValidation, validation } from "../Middleware/Validator"





const router=express.Router()
router.post("/register",registerValidation(),validation,register)
router.post("/login",loginValidation(),validation,login)
router.get("/current",isAuth,(req,res)=>{
    res.send(req.user)
})