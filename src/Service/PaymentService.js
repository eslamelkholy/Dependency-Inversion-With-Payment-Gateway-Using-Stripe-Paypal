import db from "../models";

class PaymentService {
  async addNewCharge(payment) {
    await db.payment.create(payment);
  }
}

export default new PaymentService();
