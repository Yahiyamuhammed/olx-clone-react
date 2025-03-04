import { FaSearch } from "react-icons/fa";
import styles from "./searchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBox}>
      <input className={styles.input} type="text" placeholder="Search..." />
      <FaSearch className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
