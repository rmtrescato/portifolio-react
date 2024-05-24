import styles from '../section/Book.module.css'
import gosac from '../../image/cliente/gosac.png'
import leek from '../../image/cliente/leek.png'
import magno from '../../image/cliente/magno.png'
import ps from '../../image/cliente/ps.png'
import oneprocess from '../../image/cliente/oneprocess.png'
import deltatic from '../../image/cliente/deltatic.png'


function Book(){
 return(
  <div className={styles.box} id='client-box'>
    <h1> Clientes </h1>
    <p> Sites criados e desenvolvidos para clientes especificos conforme sua demanda. </p>
      <div className={styles.img1}>
      <img src={leek} alt='error'/>
      <img src={magno} alt='error'/> 
      <img src={gosac} alt='error'/>
      <img src={ps} alt='error'/>
      <img src={oneprocess} alt='error'/>
      <img src={deltatic} alt='error'/>
      </div>
  </div>
 )
}

export default Book