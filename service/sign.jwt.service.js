// src/services/jwt.service.js
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET
const ACCESS_TOKEN_EXPIRES = '1h'



module.exports = {
 sign : (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES
  })
},

 verify : (token) => {
  // ถ้า token ไม่ถูกหรือหมดอายุ → throw error
  return jwt.verify(token, JWT_SECRET)
}
}
