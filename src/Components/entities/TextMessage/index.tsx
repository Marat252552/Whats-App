import { TextMessageF_T } from "./lib/types"
import CompanionMessage from './models/CompanionMessage'
import MyMessage from './models/MyMessage'

const TextMessage: TextMessageF_T = ({ message }) => {
    if (message.type === 'outgoing') {
        // Сообщение от пользователя
        return <CompanionMessage message={message}/>
    } else {
        // Сообщение от собеседника
        return <MyMessage message={message}/>
    }
}

export default TextMessage