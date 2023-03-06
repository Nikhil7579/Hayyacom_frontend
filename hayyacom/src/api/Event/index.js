import axios from "axios";
import { BASE_URL } from "../../Config/api";


const getEventDetails = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}invitationPage/Event-page-details/${id}`);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export {getEventDetails}