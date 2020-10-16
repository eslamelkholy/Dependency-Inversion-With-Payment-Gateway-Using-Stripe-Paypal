import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

class StripeService {
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

  async createCharge(chargeData) {
    const { amount, currency, customer, description } = chargeData;
    await stripe.charges.create({
      amount,
      currency,
      customer: customer.id,
      description,
    });
  }
}

export default new StripeService();
