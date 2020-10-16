import db from "../models";
import StripeService from "../Service/StripeService";
import { SUCCESS_MESSAGE } from "../utils/Payment";

const get = async (req, res) => {
  return res.status(200).send("Customer Charges =====");
};

/**
 * @param {chargeData: {amount, currency, description, source}} req
 * @param {charged: Boolean, message: String} res
 */
const post = async (req, res) => {
  const { chargeData } = req.body;
  await StripeService.createCharge(chargeData);

  return res.status(200).send({ charged: true, message: SUCCESS_MESSAGE });
};

export default {
  get,
  post,
};
