import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

class StripeService {
  async createCharge(chargeData) {
    const { amount, currency, description, source } = chargeData;
    const charge = await stripe.charges.create({
      amount,
      currency,
      description,
      source,
    });
    return charge;
  }

  async createCustomer(customerData) {
    const { name, email, source, address, phone } = customerData;
    const customer = await stripe.customers.create({
      address,
      name,
      email,
      phone,
      source,
    });
    return customer;
  }
}

export default new StripeService();
