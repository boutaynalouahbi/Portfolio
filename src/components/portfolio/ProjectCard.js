import React from 'react'
import "./projectCard.scss"
export default function ProjectCard({project:{ title, imageSrc, description, skills, lien, source }})
   {

  return (
    <div className='containerCard'>
        <img
        src={imageSrc}
        alt={`Image de ${title}`}
        className="image"
      />
       <h3 className="title">{title}</h3>
       <p className="description">{description}</p>
       <ul className="skills">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="skill">
              {skill}
            </li>
          );
        })}
        </ul>
        <div className="links">
            {lien ? <a href={lien} className="link">
                        Vister le site
                    </a> : ""}
            {source ? <a href={source} className="link">
                       Code source
                    </a> : ""}
      </div>
    </div>
  )
}
