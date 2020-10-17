import paypal from "paypal-rest-sdk";
import "./PayPalConfig";

class PayPalService {
  createCharge(paymentObject) {
    return new Promise(function (resolve, reject) {
      paypal.payment.create(paymentObject, function (error, payment) {
        if (error) reject(error);
        else resolve(payment);
      });
    });
  }

  getRedirectLink(links) {
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === "approval_url") return links[i].href;
    }
  }
}

export default new PayPalService();
