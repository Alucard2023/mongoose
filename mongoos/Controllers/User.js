const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(400).send({ errors: [{ msg: "email already used" }] });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ ...req.body});
        newUser.password = hashedPassword
        
        // Save the user
        await newUser.save();
        
        // Generate token
        const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, { expiresIn: "24h" });

        res.status(200).send({success:[{ msg: "inscription avec succès"}] , user: newUser, token });
    } catch (error) {
        res.status(400).send({errors:[{msg:"inscription non reussi"}]})
    }
    }
exports.login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        //check email
        const foundUser=await User.findOne({email})
        if (!foundUser){
            return res.status(400).send({errors:[{msg:"utilisteur non trouvé"}]})
        }
        const checkPassword= await bcrypt.compare(password,foundUser.password)
if  (!checkPassword){
    return res.status(400).send({errors:[{msg:'bad credential'}]})
}
const token =jwt.sign(
    {id : foundUser._id},
    procss.env.SECRET_KEY,
    {expiresIn :"24h"},
)
res.status(200).send ({msg:"login sucess",user:foundUser, token})
    }catch (error){
        return res.status(400).send({errors :[{msg:"can not login..please verify your info!!"}]})
    }
}
