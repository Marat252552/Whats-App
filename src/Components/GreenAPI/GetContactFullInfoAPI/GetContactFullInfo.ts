import GreenAPIInstance from "../Instance"
import { API_T } from "./types"


const GetContactFullInfoAPI: API_T = (idInstance, apiTokenInstance, chatId) => {
    return GreenAPIInstance.post(`/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`, {
        chatId
    })
}

export default GetContactFullInfoAPI