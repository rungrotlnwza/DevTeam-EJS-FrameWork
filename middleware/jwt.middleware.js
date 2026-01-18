// src/middlewares/auth.middleware.js
const jwtService = require('../services/jwt.service')

module.exports = {
  authenticate : (req, res, next) => {
  try {
    // 1. รับ token จาก header
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({ message: 'Missing Authorization header' })
    }

    // 2. แยก Bearer
    const [type, token] = authHeader.split(' ')

    if (type !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Invalid token format' })
    }

    // 3. verify ผ่าน service
    const decoded = jwtService.verify(token)

    // 4. ผูก user เข้า request
    req.user = decoded

    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' })
  }
}
}
