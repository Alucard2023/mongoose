const mongoose =require("mongoose")
const connectDb =async ()=>{
    //connecting to database
    try{
        await mongoose.connect(process.env.DB_URI)      
        console.log("database is connected")
        }
        catch (error){
            console.log("database not connected")
        }
    
}
module.exports=connectDb