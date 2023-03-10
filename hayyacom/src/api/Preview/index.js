import axios from "axios"
import { BASE_URL } from "../../Config/api"


const getPreviewDetails = async (id,setLoading) => {
    setLoading(true)
    try {
        const res = await axios.get(`${BASE_URL}invitationPage/preview-page/${id}`)
    setLoading(false)
    return res.data
    }
    catch(err) {
    setLoading(false)
    console.log(err);
    }
}

export {getPreviewDetails}
