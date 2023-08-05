import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import user from "./router/userRouter";
import friend from "./router/friendRouter";
import chat from "./router/chatRouter";
import chatMessage from "./router/chatMessageRouter";

const url = "mongodb://127.0.0.1:27017/simpleDB";
const app: Application = express();
const port: number = 8899;

app.use(cors());
app.use(express.json());

app.use("/api/v2", user);
app.use("/api/v2", friend);
app.use("/api/v2", chat);
app.use("/api/v2", chatMessage);

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "start",
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
});

app.listen(port, () => {
  mongoose.connect(url).then(() => {
    console.log("server connected 🚀💌🚀✌");
  });
});
