// These Data Comes From Front-End BTW
export const create_payment_json = {
  intent: "sale",
  payer: {
    payment_method: "paypal",
  },
  redirect_urls: {
    return_url: "http://localhost:3000/sucess",
    cancel_url: "http://localhost:3000/cancel",
  },
  transactions: [
    {
      item_list: {
        items: [
          {
            name: "Hello This Demo Paypal Service",
            sku: "001",
            price: "200",
            currency: "USD",
            quantity: 1,
          },
        ],
      },
      amount: {
        currency: "USD",
        total: "200.00",
      },
      description: "Hello This Demo Paypal Service Description",
    },
  ],
};
