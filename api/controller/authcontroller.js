import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req,res,next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newuser = new User({
            username : req.body.username,
            email :  req.body.email,
            password : hash,
        });
        await newuser.save();
        return res.status(200).send("new user has been created!!")
    } catch (err) {
        
    }
}

export const login = async (req,res,next) => {
    try {
        const user = await User.findOne({username : req.body.username});
        if(!user) return next(createError(404,"user not found!"));

        const isPassword = await bcrypt.compare(req.body.password,user.password);
        if(!isPassword) return next(createError(400, " incorrect password or username!"));

        const token = jwt.sign({id : user._id, isAdmin :user.isAdmin},process.env.jwt)

        const {password,isAdmin,...otherdetails} = user._doc;
        return res.cookie("access_token",token,{
            httpOnly : true
        }).status(200).json(otherdetails);
    } catch (err) {
        
    }
}