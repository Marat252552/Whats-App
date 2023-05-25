import { useEffect, useState } from "react"
import styles from './lib/styles.module.css'
import DialogInfo from "../DialogInfo"
import { observer } from 'mobx-react-lite'
import DialogsState from "../../state/DialogsState"
import UserState from "../../state/UserState"
import GetChatsAPI from "../../GreenAPI/GetChatsAPI"
import GetContactFullInfoAPI from "../../GreenAPI/GetContactFullInfoAPI/GetContactFullInfo"
import GetChatLastMessageAPI from "../../GreenAPI/GetChatLastMessageAPI/GetChatLastMessageAPI"
import { toJS } from "mobx"
import { Button } from "antd"

const DialogsList = observer(() => {

    if (!DialogsState.dialogs[0]) {
        return <div className={styles.nodialogsContainer}>
            No dialogs
        </div>
    } else {
        return <div style={{ height: '80vh' }}>
            <Button onClick={() => {console.log(toJS(DialogsState.dialogs))}}>Sync</Button>
            <div className={styles.dialogsContainer}>
                {DialogsState.dialogs.map(dialog => {
                    return <DialogInfo key={dialog.name} dialog={dialog} />
                })}
            </div>
        </div>
    }
})

export default DialogsList