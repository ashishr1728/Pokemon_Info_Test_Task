import React from 'react'


const PokeCard = (props) => {
  return (
    <div className='card_container' style={{background : props.card_color}}>
      <img src={props.image}/>
      <h2 className='poke_name'>{props.name}</h2>
      <p className='poke_species'>{props.species}</p>
      <div className='poke_type_container' style={{backgroundColor : props.species_color}}>
        <span className='poke_type'>{props.type}</span>
      </div>
      <div className='super_power_container'>
        <p className='power_heading'>Super Powers:</p>
        <div className='super_power_item'>
            {props.super_power.map((e) => (
                <span className='powers'>{e}</span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PokeCard
