import React from 'react'
import './esteemClients.css'
import { useState } from 'react'
const EsteemClients = () => {
    const arrOfOurEsteemClients = [{clients:"Techmonentum"},{clients:"Absolute Solution"}]
  return (
    <div id='esteem-clients'>
        <h2>Our Esteemed Clients</h2>
        <div id='esteem-clients-inner-div'>
            {arrOfOurEsteemClients.map((items, i)=>{
                return(
                    <div id='esteemed-clients-all-div'>
                      <h4>{items.clients}</h4>
                    </div>
                )
            })}
      
        </div>
      
      
    </div>
  )
}

export default EsteemClients
