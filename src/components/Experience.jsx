import React from 'react'
import "./Experience.scss";

const Experience = ({experience}) => {
  return (
    <div className="experienceCard">
         {experience.map((item) => {
          return (
            <div  key={JSON.stringify(item)}>
              <h3>🧑‍💼 {item.where}</h3> 
              <h4>{item.name}</h4>
              <p>{item.date}</p>
              <h4>Description: </h4>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  )
}


export default Experience