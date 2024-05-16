import ButtonB from "../elementos/ButtonB"
import styles from '../section/Projects.module.css'
import lpdnc from '../../image/projects/lpdnc.svg'
import portifolio from '../../image/projects/portifolio.png'
import tempo from '../../image/projects/tempo.png'
import Card from '../elementos/Card'


function Projects(){
 return(
  <div className={styles.projects} id='projects'>
      <h1> Projetos </h1>
      <Card
        img={lpdnc}
        title='LP - Escola DNC'
        tech='HTML, CSS e JS'
        description='Desenvolvendo uma Landing Page para o lançamento de formação em tecnologia'
        repo='https://github.com/rmtrescato/landing_dnc'
        site='https://projeto1-landingdnc.netlify.app'
      />
      <Card
        img={tempo}
        title='Consumo de API (Tempo e CEP)'
        tech='HTML, CSS, JS e API Rest full'
        description='Desenvolvimento de uma pagina com consumo de API`s do clima e de busca de CEP.'
        repo='https://github.com/rmtrescato/desafio-consumodeapi'
        site='https://consumodeapi-dncweather.netlify.app'
      />
      <Card
        img={portifolio}
        title='Portifolio Pessoal - RMTrescato'
        tech='HTML, CSS e JS'
        description='Criação uma Landing Page para o lançamento de formação em tecnologia'
        repo='https://github.com/rmtrescato/landing_dnc'
        site='https://portifolio-liard-xi.vercel.app/' 
      />
      <ButtonB id='btn' text='Acesse minhas Certificações' link='https://www.linkedin.com/in/rmtrescato/details/certifications/' />
     
  </div>
 )
}

export default Projects