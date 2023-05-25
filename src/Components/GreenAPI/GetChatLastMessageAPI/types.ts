import { AxiosResponse } from "axios";

type Message_T = {
    type: string,
    idMessage: string,
    timestamp: number,
    typeMessage: string,
    chatId: string,
    textMessage: string
}

export type API_T = (idInstance: string, apiTokenInstance: string, chatId: string) => Promise<AxiosResponse<Array<Message_T>, any>>