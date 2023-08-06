import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const port = 9000;
const app = express();

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb.")
    } catch (error) {
        throw error;
    }
}
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
// app.get("/",(req,res) => {
//     res.send("hello dost are you okkk")
// })

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//creating middleware
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something wents wrong!";
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack,
    })
})

app.listen(port, () => {
    connect()
    console.log("backend is getting ready!!")
});