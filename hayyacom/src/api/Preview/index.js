import axios from "axios"
import { BASE_URL } from "../../Config/api"


const getPreviewDetails = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}invitationPage/preview-page/${id}`)
        return res.data
    }
    catch(err) {
        console.log(err);
    }
}

export {getPreviewDetails}
