const mongoose = require ("mongoose");
const {Schema,model}= mongoose;


const contactSchema=mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
    type: String,
    required:true,
    unique:true
},
phone:Number

})
module.exports=User=mongoose.model('contact',contactSchema)


