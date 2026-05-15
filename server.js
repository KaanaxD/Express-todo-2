const express = require("express")
const app = express()
const todosRouter = require("./routes/todosRoute")
const loginRouter = require("./routes/loginRoute")
const auth = require("./middleware/auth")

app.use(express.json())
app.use(express.urlencoded())

app.use("/api/todos", auth ,todosRouter)
app.use("/api/login", loginRouter)


app.listen(3000,function(){
    console.log("Aktif di port 3000")
})