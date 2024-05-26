import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'
import typescript from '../../image/skills/typescript.svg'
import PSMI from '../../image/skills/PSMI.png'
import PSPOI from '../../image/skills/PSPOI.png'
import safe from '../../image/skills/safe.png'
import mngt2 from '../../image/skills/mngt2.jpeg'
import mngt from '../../image/skills/mngt.png'

function Skills(){
 return(
  <div className={styles.skills} id='skills'>
      <h1> Habilidades </h1>
      <p> Conheça um pouco das minhas principais habilidades e conhecimentos. </p>
      <div>
         <a href='https://community.scaledagile.com/s/learning' target='_blank' rel='noreferrer'><img src={safe} alt='Error' title='SAFe 6 Agilist'/></a>
         <a href='https://www.scrum.org/user/995064' target='_blank' rel='noreferrer'><img src={PSPOI} alt='Error' title='Professional Scrum Product Owner'/></a>
         <a href='https://www.scrum.org/user/995064' target='_blank' rel='noreferrer'><img src={PSMI} alt='Error' title='Professional Master'/></a>
         <img src={mngt2} alt='Error' title='Management 3.0'/>
         <img src={mngt} alt='Error' title='Management 3.0'/>
         <br/>
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