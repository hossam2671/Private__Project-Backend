const user = require("../models/user");

const add = async (req,res)=>{
    const {role,firstName,lastName,email,phone} = req.body
    if(!firstName){
        res.status(400).json({message:"First Name is required"})
    }
    else if(!lastName){
        res.status(400).json({message:"last Name is required"})
    }
    else if(!email){
        res.status(400).json({message:"email is required"})
    }
    else if(!phone){
        res.status(400).json({message:"phone is required"})
    }
    else{
        
        const userData = await user.create({
            role:role,
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone
        })
        console.log(userData)
        res.status(200).json({userData})
    }
}

module.exports = { add };