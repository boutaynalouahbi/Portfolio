import img1 from "../utils/projects/project.png"
import img2 from "../utils/projects/todoList.png"
import img3 from "../utils/projects/moviplus.png"

export default[
    {
        title: "Robotique",
        imageSrc: img1,
        description: "Il s'agit un site vitrine pour un centre de robotique, mettant en avant ses activités et son expertise.",
        skills: ["Wordpress"],
        lien: "http://www.robotique.ma/"
      },
    {
      title: "Todo List",
      imageSrc: img2,
      description: "Il s'agit d'un projet conçu pour apprendre Redux en créant une application.",
      skills: ["React", "Redux","Tailwind"],
      source: "https://github.com/boutaynalouahbi/TODOListAPP.git"
    },
    {
      title: "MoviPlus",
      imageSrc: img3,
      description: "Il s'agit d'un projet conçu pour apprendre Redux Toolkit et tailwind en créant une application qui utilise l'API IMDb.",
      skills: ["React", "Redux Toolkit", "SASS"],
      source: "https://github.com/boutaynalouahbi/moviePlus.git"
    }
   
  ]