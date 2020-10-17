import paypal from "paypal-rest-sdk";
import "./PayPalConfig";
import { create_payment_json } from "./mockPayment";

class PayPalService {
  createCharge() {
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) throw error;
      else {
        console.log("Create Payment Response");
        console.log(payment);
      }
    });
  }
}

export default new PayPalService();
