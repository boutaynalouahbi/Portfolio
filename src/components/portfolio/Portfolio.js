import React, { useEffect, useState } from 'react'
import './styles.scss'
import projets from "../../data/projets"
import ProjectCard from './ProjectCard';
import Slider from 'react-slick';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "black", borderRadius:"20px" }}
      onClick={onClick}
    />
  );
}
export default function Portfolio() {

  
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  });
  
   
  return (
    <section id='Portfolio' className='Portfolio'>
        <div className="container">
          <h1>Portfolio</h1>
          <p>Présentation des projets que j'ai développé</p>
          <div className='projets '>
          <Slider {...settings}  >
                
                {projets.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
          </Slider>
          </div>
        </div>
      
    </section>
  )
}
