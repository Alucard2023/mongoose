const mongoose = require ("mongoose")
const{ Schema, model }= mongoose ;

const UserSchema= new Schema({
    name: {type:string,required:true},
    email:{type:string,required:true},
    password:{type:String, required: true},
    phonr:Number,
});
module.exports = User = mongoose.model("user",UserSchema);