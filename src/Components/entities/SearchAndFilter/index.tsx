import styles from './lib/styles.module.css'
import Input from './models/input'
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

const SearchAndFilter = () => {
    return <div className={styles.container}>

        <div className={styles.searchInput}>
            <div className={styles.iconContainer}>
                <SearchIcon style={{fontSize: '20px'}}/>
            </div>
            <Input />
        </div>

        <div className={styles.iconContainer}>
            <FilterListIcon style={{fontSize: '20px'}}/>
        </div>
        
    </div>
}

export default SearchAndFilter