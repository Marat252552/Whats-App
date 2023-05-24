import Background from "./../widgets/Background/index"
import Workspace from "./../widgets/Workspace/index"
import {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import UserState from "../state/UserState"
import { useNavigate } from "react-router-dom"

const ChatPage = observer(() => {
    let navigate = useNavigate()
    useEffect(() => {
        if(!UserState.isLogged) {
            navigate('/login')
        }
    }, [])
    return <div>
        {/* <Background /> */}
        <Workspace />
    </div>
})

export default ChatPage