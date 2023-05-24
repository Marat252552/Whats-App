import GreenAPIInstance from "./Instance"
import {AxiosResponse} from 'axios'

type API_T = (idInstance: string, apiTokenInstance: string, receiptId: number) => Promise<AxiosResponse<{
    result: boolean
}>>

const DeleteNotificationAPI: API_T = (idInstance, apiTokenInstance, receiptId) => {
    return GreenAPIInstance.delete(`/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`)
}

export default DeleteNotificationAPI