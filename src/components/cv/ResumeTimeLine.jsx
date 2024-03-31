import React from 'react'
import './style.scss'
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as WorkIcon } from "./work.svg";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
export default function ResumeTimeLine() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
  return (
    <section id="Resume" className='Resume'>
    <h1 className="title">Expériences / Formation</h1>
    <VerticalTimeline>
      {timelineElements.map((element) => {
        let isWorkIcon = element.icon === "work";
        let showButton =
          element.buttonText !== undefined &&
          element.buttonText !== null &&
          element.buttonText !== "";

        return (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              {element.title}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {element.location}
            </h5>
            <p id="description">{element.description}</p>
                {element.skills && (
                  <p><strong>Technologies: </strong>{element.skills} </p>
                
                )} 
                
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  </section>
  )
}
