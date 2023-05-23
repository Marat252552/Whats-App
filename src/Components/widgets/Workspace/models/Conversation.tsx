import { useState } from "react"
import CompanionMainInfo from "../../../entities/ConversationMainInfo"
import { Companion_T } from "../../../shared/types"
import ConversationMessages from "../../../entities/ConversationMessages"
import NewMessageField from "../../../entities/NewMessageField"


const Conversation = () => {
    let [companion, setCompanion] = useState<Companion_T>({
        lastTimeOnline: '14:00',
        name: 'John'
    })
    if (!companion) {
        return <div>Выберите чат</div>
    } else {
        return <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CompanionMainInfo companion={companion}/>
            <ConversationMessages />
            <NewMessageField />
        </div>
    }
}

export default Conversation