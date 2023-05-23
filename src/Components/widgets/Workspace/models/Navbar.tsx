import DialogsList from "../../../entities/DialogsList"
import MainInfo from "../../../entities/MainInfo/index"
import SearchAndFilter from "../../../entities/SearchAndFilter/index"

const Navbar = () => {
    return <div style={{ background: 'white', height: '100vh' }}>
        <MainInfo />
        <SearchAndFilter />
        <DialogsList />
    </div>
}

export default Navbar