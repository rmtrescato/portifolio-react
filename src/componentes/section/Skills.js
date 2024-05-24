import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'
import typescript from '../../image/skills/typescript.svg'
import agile from '../../image/skills/agile.png'

function Skills(){
 return(
  <div className={styles.skills} id='skills'>
      <h1> Habilidades </h1>
      <p> Conheça um pouco das minhas principais habilidades e conhecimentos. </p>
      <div>
         <img src={agile} alt='Error' title='Agile Master'/>
         <img src={html} alt='Error' title='HTML5'/>
         <img src={css} alt='Error' title='CSS3'/>
         <img src={javascript} alt='Error' title='JavaScript'/>
         <img src={react} alt='Error' title='React'/>
         <img src={typescript} alt='Error' title='TypeScript'/>
        
      </div>

  </div>
 )
}

export default Skills