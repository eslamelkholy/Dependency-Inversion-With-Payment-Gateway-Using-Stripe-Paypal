import Stripe from "stripe";

class StripeServiceWrapper {
  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  async createCharge(chargeData) {
    const { amount, currency, description, source } = chargeData;
    const charge = await this.stripe.charges.create({
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

export default StripeServiceWrapper;
