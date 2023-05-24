import { BrowserRouter, Route, Routes } from "react-router-dom"
import ChatPage from "./Components/pages/ChatPage"
import AuthPage from "./Components/pages/AuthPage"

const App = () => {
    return <div style={{fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'lighter'}}>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<AuthPage />}/>
                <Route path='/' element={<ChatPage />}/>
            </Routes>
        </BrowserRouter>
    </div>
}

export default App