import React from 'react'
import {PlayersList} from './PlayersList'
import Cardss from './Cardss'

const Names = () => {
    return(
        <div className='grand-box'>
            {PlayersList.map((el)=><Cardss namesList ={el} key={el.id}/>)}
            
        </div>
    
    )
}

export default Names;