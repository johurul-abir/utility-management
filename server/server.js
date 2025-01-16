import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import MongoDbConnect from "./config/MongoDb.js";
import userRouter from "./router/userRouter.js";
import userAuthRouter from "./router/userAuthRouter.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import btypeBillRouter from "./router/btypeBillRouter.js";
import noticeRuter from "./router/noticeRouter.js";
import paymentRouter from "./router/paymentRouter.js";
import teamRouter from "./router/teamRouter.js";
import complainRouter from "./router/complainRouter.js";

//dotenv config
dotenv.config();

// Port
const PORT = process.env.PORT || 9090;

//init express
const app = express();

//static folder
app.use(express.static("public"));

//middleware support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin:
      process.env.APP_ENV == "Development"
        ? "http://localhost:3000"
        : "https://utility-management.vercel.app",

    credentials: true,
  })
);

//Router
app.use("/api/v1/user", userRouter);
app.use(userAuthRouter);
app.use("/api/v1/btypebill", btypeBillRouter);
app.use("/api/v1/notice", noticeRuter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/team", teamRouter);
app.use("/api/v1/complain", complainRouter);

//errorHandler
app.use(errorHandler);
app.listen(PORT, () => {
  MongoDbConnect();
  console.log(`server is runnig on port ${PORT}`.bgGreen.black);
});
