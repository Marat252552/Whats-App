import { useState, useEffect } from "react"
import CompanionMainInfo from "../../../entities/ConversationMainInfo"
import { Dialog_T } from "../../../shared/types"
import ConversationMessages from "../../../entities/ConversationMessages"
import NewMessageField from "../../../entities/NewMessageField"
import { observer } from 'mobx-react-lite'
import DialogsState from "../../../state/DialogsState"

const Conversation = observer(() => {
    let [dialog, setDialog] = useState<Dialog_T>()
    useEffect(() => {
        let requiredDialog = DialogsState.dialogs.find(el => {
            return el.chatId === DialogsState.currentDialogChatId
        })
        setDialog(requiredDialog)
    }, [DialogsState.currentDialogChatId])
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CompanionMainInfo dialog={dialog} />
        <ConversationMessages />
        <NewMessageField />
    </div>
})

export default Conversation