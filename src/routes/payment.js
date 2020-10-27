import express from "express";
import payment from "../controller/payment";
const paymentRouter = express.Router();

paymentRouter.post("/", payment.post);
paymentRouter.post("/paypal", payment.paypal);
paymentRouter.get("/success", payment.successPage);

export default paymentRouter;
