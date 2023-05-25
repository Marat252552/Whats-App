import { makeAutoObservable } from "mobx";
import { StateChat_T } from "../shared/types";

class ChatsState {
    chats: Array<StateChat_T> = [
    ]
    currentChatId = ''
    constructor() {
        makeAutoObservable(this)
    }
    addChat(chatId: string, name: string) {
        let chat: StateChat_T = {
            chatId,
            name
        }
        this.chats.push(chat)
    }
    setCurrentChatId(value: string) {
        this.currentChatId = value
    }
}

export default new ChatsState