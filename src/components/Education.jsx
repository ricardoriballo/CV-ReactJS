import React from "react";
import "./Education.scss";
import { ImBooks, ImSphere, ImCalendar, ImMap, } from "react-icons/im";


const Education = ({ education }) => {
  let iconStyles = { color: "white", fontSize: "1.5em", marginRight: "12px" };

  return (
    <div>
      <div className="educationCard">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h3>📜 {item.name}</h3>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.place}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;