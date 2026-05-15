let jwt = require("jsonwebtoken")
let SECRET = "rahasia"

function auth(req,res,next){
    let bearerToken = req.headers.authorization
    if(!bearerToken){
        return res.json({
            status: 404,
            message: "Token tidak ada"
        })
    }

    try {
        let token = bearerToken.split(" ")[1]
        let user = jwt.verify(token,SECRET)
        next()
    } catch (err) {
        return res.json({
            status: 404,
            message: "Token invalid"
        })
    }
}

module.exports = auth