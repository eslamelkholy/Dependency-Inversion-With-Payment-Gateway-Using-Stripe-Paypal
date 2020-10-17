import AxiosInstance from "../Axios/AxiosInstance";

const addPayment = async () => await AxiosInstance.post("/payment/paypal");

export default { addPayment };
