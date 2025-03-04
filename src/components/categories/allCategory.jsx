import styles from './allCategory.module.css'
export default function(){

    return(
        <div>
            <select className={styles.select} name="" id="">
                <option value="">All Categories</option>
                <option value="">mobile</option>
            </select>
        </div>
    )
}