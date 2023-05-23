import { useState } from "react"
import styles from './lib/styles.module.css'
import { Dialog_T } from "../../shared/types"
import DialogInfo from "../DialogInfo"

const DialogsList = () => {
    let [dialogs, setDialogs] = useState<Dialog_T[]>([
        {name: 'John', lastMessage: 'Hi', lastMessageTime: '12:00'}
    ])
    if(!dialogs[0]) {
        return <div className={styles.nodialogsContainer}>
            No dialogs
        </div>
    } else {
        return <div>
        {dialogs.map(dialog => {
            return <DialogInfo key={dialog.name} dialog={dialog}/>
        })}
    </div>
    }
}

export default DialogsList