const express = require("express")

const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const authRoutes = require("./routes/auth")
const authUser = require("./routes/user")
const authPost = require("./routes/posts")
const authCat = require("./routes/categories")



dotenv.config();
app.use(express.json())

mongoose.connect(process.env.CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(console.log("Connected to Mongodb"))
    .catch((err) => console.log(err))

app.use("/auth", authRoutes)
app.use("/users", authUser)
app.use("/posts",authPost)
app.use("/category", authCat)



app.listen("5000", () => {
    console.log("Backend running")
})