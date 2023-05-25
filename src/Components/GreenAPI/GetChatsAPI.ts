import { AxiosResponse } from "axios"
import GreenAPIInstance from "./Instance"
import { Chat_T } from "../shared/types"

type API_T = (idInstance: string, apiTokenInstance: string) => Promise<AxiosResponse<Array<Chat_T>, any>>

const GetChatsAPI: API_T = (idInstance, apiTokenInstance) => {
    return GreenAPIInstance.get(`/waInstance${idInstance}/getChats/${apiTokenInstance}`)
}

export default GetChatsAPI