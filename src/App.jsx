
import './App.scss';
import { useState } from "react";
import { CV } from "./CV/CV";
import Info from './components/Info';
import Education from './components/Education';
import Experience from "./components/Experience";
import More from "./components/More";
import About from "./components/About"

 const { info, education, experience, languages } = CV;

function App() {
  const [showInfo, setShowInfo] = useState("");

  return (
    <div className="App">
        <div className='intro-container'>
        <Info info={info} />

        </div>  
        <div className='rightContainer'>  
        <div className='buttonContainer'>   
                <button className="bn39" href="/"><span className="bn39span" onClick={() => setShowInfo("1")} >Education</span></button>
                <button className="bn39" href="/"><span className="bn39span" onClick={() => setShowInfo("2")} >Experience</span></button>
                <button className="bn39" href="/"><span className="bn39span" onClick={() => setShowInfo("3")} >About</span></button>
                <button className="bn39" href="/"><span className="bn39span" onClick={() => setShowInfo("4")} >More</span></button>
        </div>
        <div className='infoContainer'>
                {showInfo==="1" ? (<Education education={education} />) : (showInfo==="2" ? (<Experience experience={experience} />) : (showInfo==="3" ? (<About info={info} />) : (showInfo==="4" ? (<More languages={languages} />) : (<Education education={education} />)) ))}
        </div>
        </div> 
     
    </div>
  );
}

export default App;

