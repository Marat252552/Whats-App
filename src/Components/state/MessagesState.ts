import {makeAutoObservable} from 'mobx'
import { TextMessage_T } from '../shared/types'


class MessagesState {
    messages: Array<TextMessage_T> = []
    constructor() {
        makeAutoObservable(this)
    }
    addMessage(chatId: string, textMessage: string, idMessage: string, type: string, timestamp: number) {
        this.messages = this.messages.filter(el => {
            return el.idMessage !== idMessage
        })
        let message: TextMessage_T = {
            chatId,
            textMessage,
            idMessage,
            senderId: '',
            senderName: '',
            timestamp,
            type,
            typeMessage: 'textMessage'
        }
        this.messages.push(message)
    }
}

export default new MessagesState()