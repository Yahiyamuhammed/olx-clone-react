import adImg from '../../assets/ad.png'
import styles from './ad.module.css'
export default function  (){
    return (
        <div className={styles.imageWrapper}>
            <img className={styles.stretchedImage} src={adImg} alt="" />

        </div>
    )
}