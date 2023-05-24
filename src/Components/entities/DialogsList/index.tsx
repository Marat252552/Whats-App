import { useEffect, useState } from "react"
import styles from './lib/styles.module.css'
import DialogInfo from "../DialogInfo"
import { observer } from 'mobx-react-lite'
import DialogsState from "../../state/DialogsState"

const DialogsList = observer(() => {

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