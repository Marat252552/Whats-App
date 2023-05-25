import { makeAutoObservable } from "mobx";
import { Dialog_T } from "../shared/types";

class DialogsState {
    dialogs: Array<Dialog_T> = [
    ]
    currentDialogChatId = ''
    constructor() {
        makeAutoObservable(this)
    }
    addDialog(chatId: string, name: string, lastMessageText: string, lastMessageTimestamp: number) {
        let dialog: Dialog_T = {
            chatId,
            lastMessageText,
            lastMessageTimestamp,
            name
        }
        this.dialogs.push(dialog)
    }
    setCurrentDialogChatId(value: string) {
        this.currentDialogChatId = value
    }
}

export default new DialogsState