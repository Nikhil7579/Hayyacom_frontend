import axios from "axios"
import { BASE_URL } from "../../Config/api"

const getInvitationDetails = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}invitationPage/invitation-page-details/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export { getInvitationDetails }

const putUpdateStatus = async (data) => {
    try {
        const res = await axios.put(`${BASE_URL}invitationPage/update-status`, (data))
        return res
    } catch (error) {
        console.log(error);
    }
}

export { putUpdateStatus }