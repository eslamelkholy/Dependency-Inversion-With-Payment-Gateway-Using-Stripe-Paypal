class PayPalConfig {
  SetConfig(paypal) {
    const config = {
      host: "api.sandbox.paypal.com",
      port: "",
      client_id: process.env.PAYPAL_CLIENT_ID,
      client_secret: process.env.PAYPAL_SECRET,
    };
    paypal.configure(config);
  }
}
export default new PayPalConfig();
