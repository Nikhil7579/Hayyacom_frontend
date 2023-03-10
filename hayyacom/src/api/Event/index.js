import axios from "axios";
import { BASE_URL } from "../../Config/api";


const getEventDetails = async (id,setLoading) => {
    try {
        setLoading(true)
        const res = await axios.get(`${BASE_URL}invitationPage/Event-page-details/${id}`);
        setLoading(false)
        return res.data
    } catch (error) {
        console.log(error);
        setLoading(false)
        throw(error);
    }
}

export {getEventDetails}