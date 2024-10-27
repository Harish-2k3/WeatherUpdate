import axios from "axios";
import apiurl from "./Apiendpoint";

export const getWeatherData = async () => {
    const res = await axios.get(`${apiurl()}/VisualCrossingWebServices/rest/services/timeline/vellore?unitGroup=metric&key=CZU55EBY9MHXLGM5YP4ECD2UU&contentType=json`)
    return res.data;
}