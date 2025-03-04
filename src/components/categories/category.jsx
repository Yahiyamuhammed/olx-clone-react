import AllCategory from './allCategory'
import styles from './category.module.css'
import CategoryLinks from './categoryLinks'
export default function (){
    return (
        <div>
            <div style={{backgroundColor:'white',height:'3px' }}></div>
            <div style={{backgroundColor:'#eff1f3',height:'3px' }}></div>
            <div className={styles.div}>
                < AllCategory/>
                < CategoryLinks/>
            </div>
            <div style={{backgroundColor:'#eff1f3',height:'3px' }}></div>
            <div style={{backgroundColor:'white',height:'3px' }}></div>

            <div></div>
        </div>
    )
}