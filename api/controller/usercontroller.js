0
import User from "../models/User.js";


export const updateUser = async (req,res,next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,{$set : req.body},{new : true});
        res.status(200).json(updateUser);
    } catch (err) {
        console.log(err);
        // res.status(500).json(error);
        next(err);
    }
}
export const deleteUser = async (req,res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
       res.status(200).json("User has been deleted!");
   } catch (err) {
       console.log(err);
    //    res.status(500).json(error);
        next(err);
   }
}
export const getUser = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        // res.status(500).json(error);
        next(err);
    }
}
export const getallUser = async (req,res,next) => {
    // const failed = true;
    // if(failed) return next(createError(401,"you are not authorized for this"))
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err); 
        next(err);
    }
}