const jwt=require("jsonwebtoken")


const secret="22C/MC/CN"

const data={name:"Min Cherry",bio:"Very Love"}

const token=jwt.sign(data,secret)

console.log("token ",token)


// decode json
const decodeToken=jwt.verify(token,secret)
console.log("decode token ",decodeToken)