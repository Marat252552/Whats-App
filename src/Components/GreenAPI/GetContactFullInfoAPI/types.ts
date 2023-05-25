import { AxiosResponse } from "axios"

type ContactFullData_T ={
    avatar: string,
    name: string,
    email: string,
    category: string,
    description: string,
    products: string,
    chatId: string,
    lastSeen: number,
    isArchive: boolean,
    isDisappearing: false,
    isMute: false,
    messageExpiration: number,
    muteExpiration: number
}

export type API_T = (idInstance: string, apiTokenInstance: string, chatId: string) => Promise<AxiosResponse<ContactFullData_T ,any>>