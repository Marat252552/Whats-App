import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ChatPage from "./Components/pages/ChatPage"
import AuthPage from "./Components/pages/AuthPage"
import { observer } from "mobx-react-lite"
import UserState from "./Components/state/UserState"

const App = observer(() => {
    return <div style={{fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'lighter'}}>
        <BrowserRouter>
            <Routes>
                {/* User may enter ChatPage route only if he is logged in */}
                {
                    UserState.isLogged ?
                    <Route path='/' element={<ChatPage />}/>
                    :
                    undefined
                }
                <Route path='/login' element={<AuthPage />}/>
                {/* Every unknown route leads to loginPage */}
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    </div>
})

export default App