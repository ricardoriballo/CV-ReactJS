import "./About.scss";
import React from 'react'
import { BiHappyBeaming } from "react-icons/bi";



const About = ({info}) => {
  let iconStyles = { color: "rgba(11, 211, 225, 0.36)", fontSize: "1.5em", marginLeft: "12px" };
  return (<div className="aboutCard">
    <h3>Something about my personal life <BiHappyBeaming style={iconStyles} /></h3>
    <div>  {info.aboutMe.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            
            <h4>{item.like}</h4>
            <p>{item.infoText}</p>

          </div>
        );
      })}</div>
      </div>
  )
}

export default About