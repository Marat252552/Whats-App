import ChatsList from "../../../entities/ChatsList"
import MainInfo from "../../../entities/MainInfo/index"
import SearchAndFilter from "../../../entities/SearchAndFilter/index"

const Navbar = () => {
    return <div style={{ background: 'white', height: '100vh' }}>
        {/* User main info */}
        <MainInfo />
        <SearchAndFilter />
        {/* All chats */}
        <ChatsList />
    </div>
}

export default Navbar