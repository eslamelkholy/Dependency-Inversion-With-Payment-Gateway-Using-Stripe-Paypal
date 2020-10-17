import StripeService from "../Service/StripeService";
import PayPalService from "../Service/PayPal/PaypalService";
import PaymentService from "../Service/PaymentService";
import { SUCCESS_MESSAGE } from "../utils/Payment";
import { create_payment_json } from "../Service/PayPal/mockPayment";

const get = async (req, res) => {
  return res.status(200).send("Customer Charges =====");
};

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

const paypal = async (req, res) => {
  const redirectLink = await PayPalService.createCharge(create_payment_json);
  return res.status(200).send({ redirectLink });
};

export default {
  get,
  post,
  paypal,
};
