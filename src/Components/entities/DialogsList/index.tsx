import { useEffect, useState } from "react"
import styles from './lib/styles.module.css'
import DialogInfo from "../DialogInfo"
import { observer } from 'mobx-react-lite'
import DialogsState from "../../state/DialogsState"
import GetContactsAPI from "../../GreenAPI/GetContactsAPI"
import UserState from "../../state/UserState"

const DialogsList = observer(() => {
    useEffect(() => {
        let getContacts = async () => {
            let response = await GetContactsAPI(UserState.idInstance, UserState.apiTokenInstance)
            if(response.status === 200) {
                response.data.forEach(contact => {
                    DialogsState.addDialog(contact.id, contact.name)
                })
            }
        }
        getContacts()
    }, [])
    if (!DialogsState.dialogs[0]) {
        return <div className={styles.nodialogsContainer}>
            No dialogs
        </div>
    } else {
        return <div style={{ height: '80vh' }}>
            <div className={styles.dialogsContainer}>
                {DialogsState.dialogs.map(dialog => {
                    return <DialogInfo key={dialog.name} dialog={dialog} />
                })}
            </div>
        </div>
    }
})

export default DialogsList