import express from "express";
import payment from "../controller/payment";
const paymentRouter = express.Router();

paymentRouter.get("/", payment.get);
paymentRouter.post("/", payment.post);
paymentRouter.post("/paypal", payment.paypal);

export default paymentRouter;
