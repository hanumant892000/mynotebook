const jwt = require('jsonwebtoken');

const SECRET_KEY = '585034c3909eeba3a66fd39836aefc0718f5c18c5a834c2b6e8698569718d457'

const verifyAuth = async (req, res, next) => {
    const token = req.header("token")

    if (!token) {
        return res.send({
            success: false,
            message: "Your account is not authorized!"
        })
    }
    const decode = jwt.verify(token, SECRET_KEY)
    if (!decode?.id) {
        return res.send({
            success: false,
            message: "Your account is not authorized!"
        })
    }

    req.user = decode.id;
    next()

}

module.exports = verifyAuth