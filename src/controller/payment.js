import StripeService from "../Service/StripeService";
import PaymentService from "../Service/PaymentService";
import { SUCCESS_MESSAGE } from "../utils/Payment";

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

export default {
  get,
  post,
};
