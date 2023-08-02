import React from 'react';
import styles from './Cardss.css'

// nameslist props eli bach nbadel bada les donnees

const Cardss =({namesList})=>{
     return (
    <div className="cardd">
        <div calssName='box-cardd'> <img src={namesList.img} /></div>
          <div > <h3>Name: </h3>{namesList.Name}</div> 
          <div> <h3>Team: </h3>{namesList.Team}</div>
          <div> <h3>Nationality: </h3>{namesList.Nationality}</div>
          <div> <h3>JerseyNumber: </h3>{namesList.JerseyNumber}</div>
          <div> <h3>Age:</h3> {namesList.Age}</div>
            
    </div>
    
  )
}

export default  Cardss;

