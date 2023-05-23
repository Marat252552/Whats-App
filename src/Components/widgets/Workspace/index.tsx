import Conversation from "./models/Conversation"
import Navbar from "./models/Navbar"
import styles from './lib/styles.module.css'

const Workspace = () => {
    return <div className={styles.mainContainer}>
        <Navbar />
        <Conversation />
    </div>
}

export default Workspace