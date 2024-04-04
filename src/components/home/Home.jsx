import React, { useState } from 'react'
import './style2.scss'
export default function Home() {
  return (
    <section className='Home' id='Home'>
                {/* <div className="home_text-wrap">
                    
                    <p>Bienvenue dans mon portfolio !</p>
                    <h1>je suis Boutayna Louahbi </h1>
                    <h1> développeuse Full Stack</h1>
                    <p>Je suis une passionnée du web et j'ai hâte de partager mes compétences  et mes réalisations avec vous.</p>
                </div> */}
                <div class="container">
                    <p className='typed'>Bienvenue dans mon portfolio !</p>
                    <h1 className='typed2'>je suis Boutayna Louahbi </h1>
                    <h1 className='typed3'> développeuse Full Stack </h1>
                    <p className='typed4'>Je suis une passionnée du web </p>
                    <p className='typed5'>et j'ai hâte de partager mes compétences  </p>
                    <p className='typed6'>et mes réalisations avec vous.</p>
                    
                </div> 
                <a href="#About" class="button">En savoir plus sur moi</a>
                </section>
  )
}
