import styles from './Presentation.module.css'
import ButtonA from '../elementos/ButtonA'



function Presentation(){
 return(
  <div className={styles.presentation} id="apresenta">
     <h4><strong>Bem-vindo ao meu portifolio</strong></h4>
     <h1>Olá, eu sou o Rodrigo Trescato!</h1>
     <p>
      Sou um apaixonado por tecnologia e soluções inovadoras. Como <br/>
      <strong>Scrum Agile Master</strong>, eu tenho o compromisso de resolver problemas<br/>
      complexos e trazer resultados excepcionais para os negócios.<br/>
      Meus projetos já geraram milhões de reais em receita anual<br/>
      estou sempre em busca de novos desafios para superar.
      </p>

      <ButtonA link='https://linkedin.com/in/rmtrescato' text='Conecte-se comigo' />
  </div>
 )
}

export default Presentation