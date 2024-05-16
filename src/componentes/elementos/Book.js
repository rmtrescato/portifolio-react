import styles from '../elementos/Book.module.css'


function Book({img}){
 return(
  <div className={styles.grade}>
    <img src={img} alt='Error'/>
  </div>
 )
}

export default Book