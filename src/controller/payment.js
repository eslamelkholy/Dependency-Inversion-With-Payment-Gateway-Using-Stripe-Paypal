import StripeService from "../Service/StripeService";
import PayPalService from "../Service/PaypalService";
import PaymentService from "../Service/PaymentService";
import { SUCCESS_MESSAGE } from "../utils/Payment";
import { create_payment_json, execute_payment_json } from "../Service/PayPal/mockPayment";
import PaypalService from "../Service/PaypalService";

/**
 * @param {chargeData: {amount, currency, description, source: 'tok_visa' For Test}} req
 * @param {charged: Boolean, message: String} res
 */

const post = async (req, res) => {
  const { chargeData } = req.body;
  const charge = await StripeService.createCharge(chargeData);
  await PaymentService.addNewCharge(charge);

  return res.status(200).send({ charged: true, message: SUCCESS_MESSAGE });
};

/**
 * @param {paymentObject} req
 * @param {redirectLink: String} res
 */

const paypal = async (req, res) => {
  const payment = await PayPalService.createCharge(create_payment_json);
  const redirectLink = PaypalService.getRedirectLink(payment.links);
  return res.status(200).send({ redirectLink });
};

/**
 * Success Page After The Payment Finished Successfully
 */
const successPage = async (req, res) => {
  const { PayerID, paymentId } = req.query;
  const payment_object = execute_payment_json(PayerID);
  const payment = await PaypalService.paymentExecution(payment_object, paymentId);
  await PaymentService.addNewCharge(payment);
  return res.status(200).send("Success");
};

export default {
  post,
  paypal,
  successPage,
};
