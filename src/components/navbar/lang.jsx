import styles from './lang.module.css'
function LanguageDropdown() {
    return (
      <select className={styles.select}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    );
  }
  
  export default LanguageDropdown;  