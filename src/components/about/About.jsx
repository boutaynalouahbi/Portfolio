import React from 'react'
import './styles.scss'
export default function About() {
  return (
    <section id='About' className='About'>
        <div className="container">
          <h1>Présentation</h1>
          <p>Je suis Boutayna Louahbi, une <strong>développeuse web</strong>  full stack de 23 ans. <br/><br/>
          Diplômée en ingénierie en génie mathématique et informatique, j'ai acquis une  expérience grâce à mes stages dans le domaine.<br/><br/>
            Passionnée par le développement web, j'ai développé des compétences approfondies en utilisant des technologies telles que <strong>Node.js</strong> , <strong>React.js</strong> , Java et Spring Boot. </p>

        </div>
        <div>
        <div className='buttuns'>
            <a href="cv boutayna.pdf" className="cv">Télécharger mon cv</a>
            <a href="/#Contact" className="contact">Me contacter</a>
        </div>
        </div>
    </section>
  )
}
