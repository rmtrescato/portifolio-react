import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from '../section/Footer.module.css'


function Footer(){
 return(
   <div className={styles.footer}>
       <ul>
        <li><a href='https://github.com/rmtrescato' target='_blank' rel='noreferrer' title='GitHub de Trescato'><FaGithub size={30}/></a></li>
        <li><a href='https://instagram.com/rmtrescato' target='_blank' rel='noreferrer' title='Instagram de Trescato'><FaInstagram size={30}/></a></li>
        <li><a href='https://www.linkedin.com/in/rmtrescato/' target='_blank' rel='noreferrer' title='LinkedIn de Trescato'><FaLinkedin size={30}/></a></li>
       </ul>
       <p><a href="mailto:rmtrescato@gmail.com" target="_blank" rel="noreferrer">rmtrescato@gmail.com</a></p>
       <p> Rodrigo M. Trescato © 2024 </p>
   </div>
 )
}

export default Footer