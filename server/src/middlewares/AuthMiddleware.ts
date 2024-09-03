import jwt from "jsonwebtoken"

import {NextFunction, Request, Response}  from "express"
 const  authMiddleware = (req:Request, res: Response, next:NextFunction) => {
    const authHeader = req.headers.authorization
    if(authHeader === null || authHeader === undefined) {
        return res.status(401).json({status:401, message: "UnAuthrized" });
    }

    const token = authHeader.split(" ")[1]

    jwt.verify(token,process.env.JWT_SECRET!,(err, user) => {
        if(err) return res.status(401).json({status:401, message: "UnAuthrized" });
        req.user = user as AuthUser
        next()
    })
}


export default authMiddleware;