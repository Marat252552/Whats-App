import { useEffect, useState } from "react"
import styles from './lib/styles.module.css'
import { Dialog_T } from "../../shared/types"
import DialogInfo from "../DialogInfo"

const DialogsList = () => {
    let [dialogs, setDialogs] = useState<Dialog_T[]>([
        { name: 'John', lastMessage: 'Hi', lastMessageTime: '12:00' }
    ])
    useEffect(() => {
        let newDialogs = []
        for (let i = 0; i < 15; i++) {
            let element = { name: 'John', lastMessage: 'Hi', lastMessageTime: '12:00' }
            newDialogs.push(element)
        }
        setDialogs(newDialogs)
    }, [])

    if (!dialogs[0]) {
        return <div className={styles.nodialogsContainer}>
            No dialogs
        </div>
    } else {
        return <div style={{height: '80vh'}}>
            <div className={styles.dialogsContainer}>
                {dialogs.map(dialog => {
                    return <DialogInfo key={dialog.name} dialog={dialog} />
                })}
            </div>
        </div>

    }
}

export default DialogsList