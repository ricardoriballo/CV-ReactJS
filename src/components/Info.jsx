import "./Info.scss";
import { BiBuildingHouse, BiCalendar, BiMailSend, BiDialpadAlt, BiDesktop, } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";


const Info = ({ info }) => {
  console.log(info.aboutMe)
  let iconStyles = { color: "white", fontSize: "1.5em", marginRight: "12px" };
  return (
    <div className="photo">
      <div className="imgContainer">
      <img src={info.image} alt="" />
      </div>
      <div className="card">
      <h2>{info.name} {info.adress}</h2>
        <p><BiBuildingHouse style={iconStyles}/>  {info.city} </p>
        <p><BiCalendar style={iconStyles}/>  {info.birthDate}</p>
        <p><BiMailSend style={iconStyles}/><a href={"mailto:" + info.email}>  ricardoriballo.dev@gmail.com</a></p>
        <p><BiDialpadAlt style={iconStyles}/> {info.phone}-605605655</p>
        <p><BiDesktop style={iconStyles}/> <a href={info.gitHub}> GitHub</a></p>
        <p><BsLinkedin style={iconStyles}/> <a href="https://www.linkedin.com/in/ricardo-riballo-822797158/">Linkedin</a></p>
        
      
      </div>
    </div>
  );
};

export default Info;