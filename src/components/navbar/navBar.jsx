import logo from '../../assets/olx.svg';
import wish from '../../assets/wish.svg';
import styles from './navBar.module.css';
import sell from '../../assets/sells.png';
import SearchBar from './searchBar';
import LanguageDropdown from './lang';

export default function NavBar() {
    return (
        <div className={styles.div}>
            <img src={logo} alt="logo image" className={styles.img} />

           
            <select className={styles.input}>
                <option value="india">India</option>
                <option value="kerala">Kerala</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
            </select>

           
            <SearchBar className={styles.searchBar} />

           
            <LanguageDropdown />

           
            <div className={styles.right}>
            <img className={styles.wishlistIcon} src={wish} alt="wishlist" />

              {/* Login & Sell */}
              <h4 className={styles.login}>Login</h4>
              <img className={styles.sellBtn} src={sell} alt="sell" />
            </div>
            
        </div>
    );
}
