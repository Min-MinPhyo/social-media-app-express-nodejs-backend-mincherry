const { use } = require("bcrypt/promises")
const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const secret=process.env.JWT_SECRET
let clients=[]



router.ws("/subscribe",(ws,req)=>{
    console.log("ws connection receive")

    ws.on("message",msg=>{
        const {token}=JSON.parse(msg)
        console.log("ws new token receive")

        jwt.verify(token,secret,(error,user)=>{

            if(error) return false
            clients.push({userId:user.id,ws})
            console.log(`ws cliend added ${user.id}`)

        })


    })
})


module.exports={clients,wsRouter:router}

