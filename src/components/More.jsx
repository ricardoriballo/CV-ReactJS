import React from 'react'
import "./More.scss"

const More = ({languages}) => {
  
  return (
    <>
    <div className="moreCard">
        <h3>📚  Languages 📚 </h3>
        <h3>🇬🇧 {languages.language} 🇪🇸</h3>
        <h4>Writing Level: {languages.wrlevel}</h4>
        <h4>Speaking Level: {languages.splevel}</h4>
    
    
        <h3>🔮 Habilities 🔮</h3>
        <ul className='habilities'>
        {languages.habilities.map((item) => {
          return (
              <li className="habs"> {item.hab}</li>
            
          );
        })}
        </ul>
    </div>
     
    </>
  )
}

export default More