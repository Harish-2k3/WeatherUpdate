import axios from "axios";
import { stockUrl } from "./Apiendpoint";

export const GetStockData = async () => {
    const res = await axios.get(`${stockUrl()}/api/v3/global/decentralized_finance_defi?x_cg_demo_api_key=CG-qSrGQvcuQ7Q2dLMJ4c6GtW2A`)
    return res.data;
}

export const getCriptoData = async () => {
    const res = await axios.get(`${stockUrl()}/api/v3/global?x_cg_demo_api_key=CG-qSrGQvcuQ7Q2dLMJ4c6GtW2A`)
    return res.data;
}