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
      complexos e trazer resultados rapidos e coninuos para os negócios.<br/>
      Condizuir o planejamento estratégico determinado atuando diretamente na <br/>
      compreensao de monitoramento de Roadmaps, levantamento de prioridades de <br/>
      backlog e Product Discovery. Estou sempre em busca de novos desafios para superar.<br/>
      </p>

      <ButtonA link='https://linkedin.com/in/rmtrescato' text='Conecte-se comigo' />
  </div>
 )
}

export default Presentation