import GreenAPIInstance from "./Instance"
import {AxiosResponse} from 'axios'
import { Contact_T } from "../shared/types"

type API_T = (idInstance: string, apiTokenInstance: string) => Promise<AxiosResponse<Array<Contact_T>, any>>

const GetContactsAPI: API_T = (idInstance, apiTokenInstance) => {
    return GreenAPIInstance.get(`/waInstance${idInstance}/getContacts/${apiTokenInstance}`)
}

export default GetContactsAPI