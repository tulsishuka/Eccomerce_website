
import express from "express";
import authRouter from "./routes/authRouter";
import productRouter from "./routes/productRouter";
import orderRouter from "./routes/orderRouter";

const app = express();

app.use(express.json());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);


export default app;

