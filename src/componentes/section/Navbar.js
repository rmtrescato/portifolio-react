import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
 return(
  <div className={styles.navbar}>
   <ul>
      <li><Nav.Link href='#apresenta'>Apresentação</Nav.Link></li>
      <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
      <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
      <li><Nav.Link href='#client-box'>Clientes</Nav.Link></li>
   </ul>
   <ul>
      <li><a href='https://github.com/rmtrescato' target='_blank' rel='noreferrer' title='GitHub de Trescato'><FaGithub size={30}/></a></li>
      <li><a href='https://instagram.com/rmtrescato' target='_blank' rel='noreferrer' title='Instagram de Trescato'><FaInstagram size={30}/></a></li>
      <li><a href='https://www.linkedin.com/in/rmtrescato/' target='_blank' rel='noreferrer' title='LinkedIn de Trescato'><FaLinkedin size={30}/></a></li>
   </ul>
  </div>
 )

}


export default Navbar