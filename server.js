const express = require ("express")
//create instance
const app=express()

//middleware bodyparser
app.use(express.json())

//require env and config
require("dotenv").config();


// connectDB
const connectDb=require("./mongoos/config/ConnectDB")
connectDb();
app.use('api/user',require("./Routes/user"))


//create PORT
const PORT=process.env.PORT

app.use('/api/Contact',require("./mongoos/Routes/ContactR"))

//create server
app.listen(PORT,error=>{
    error? console.error(`fail to connect,${error}`) :
    console.log(`server is runing on port,${PORT}`)

})

