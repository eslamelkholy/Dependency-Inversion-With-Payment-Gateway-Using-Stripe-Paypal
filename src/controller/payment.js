import db from "../models";

const get = async (req, res) => {
  return res.status(200).send("Hello World");
};

const post = (req, res) => {
  return res.status(200).send("Posted Payment");
};

export default {
  get,
  post,
};
