let jwt = require("jsonwebtoken")
let SECRET = "rahasia"

function login(req,res){
    let nama = req.body.nama
    let password = req.body.password
    if(nama=="LemenAir" && password=="arkabganteng"){
        let token = jwt.sign({
            user: nama,
        }, SECRET, {
            expiresIn: "7d"
        })
        req.user = nama
        return res.json({
            user: nama,
            token: token,
            message: "behasil login"
        })
    }

    res.status(404).json({
        message: "login gagal"
    })
}

module.exports = login