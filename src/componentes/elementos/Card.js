import styles from '../elementos/Card.module.css'
import ButtonB from './ButtonB'


function Card({img,title,tech,description,repo,site}){
 return(
   <div className={styles.card}>
      <a href={site} target='_blank' rel='noreferrer' title='Clique para visitar o portifolio publicado'>
          <img src={img} alt='Error'/>
      </a>
     <section>
        <h3> {title} </h3>
        <p><strong>Tecnologia</strong> {tech} </p>
        <p> {description} </p>
        <ButtonB text='Acesse o Repositório' link={repo}/>
     </section>
     
   </div>
 )
}

export default Card