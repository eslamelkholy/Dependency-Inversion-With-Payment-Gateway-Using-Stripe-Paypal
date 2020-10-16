import db from "../models";

const get = async (req, res) => {
  console.log(process.env.STRIPE_PUBLISH_KEY);
  return res.status(200).send("Hello World");
};

const post = (req, res) => {
  return res.status(200).send("Posted Payment");
};

export default {
  get,
  post,
};
