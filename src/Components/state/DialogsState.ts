import { makeAutoObservable } from "mobx";
import { Dialog_T } from "../shared/types";

class DialogsState {
    dialogs: Array<Dialog_T> = [
    ]
    currentDialogChatId = ''
    constructor() {
        makeAutoObservable(this)
    }
    addDialog(chatId: string) {
        let dialog: Dialog_T = {
            chatId,
            lastMessage: '',
            lastMessageTime: '00:00',
            name: chatId
        }
        this.dialogs.push(dialog)
    }
    setCurrentDialogChatId(value: string) {
        this.currentDialogChatId = value
    }
}

export default new DialogsState