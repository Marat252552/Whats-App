import {makeAutoObservable} from 'mobx'
import { TextMessage_T } from '../shared/types'


class MessagesState {
    messages: Array<TextMessage_T> = []
    constructor() {
        makeAutoObservable(this)
    }
    addMessage(chatId: string, textMessage: string, idMessage: string, type: string) {
        let message: TextMessage_T = {
            chatId,
            textMessage,
            idMessage,
            senderId: '',
            senderName: '',
            timestamp: 0,
            type,
            typeMessage: 'textMessage'
        }
        this.messages.push(message)
    }
}

export default new MessagesState()