import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getPoke } from './Api/index.js'
import PokeCard from './component/PokeCard.jsx'

function App() {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState("")

  useEffect(()=>{
    getPoke().then((poke) => {setData(poke)})
  },[])

  const filteredData = data ? data.filter((item)=>(
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.species.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  )) : null
  // console.log(filteredData);

  return (
    <div className='container'>
      <h1 className='main_heading'>Pokédex</h1>
      <p className='info_text'>Discover amazing Pokémon and their incredible super powers</p>
      <input onChange={(e) => {setSearch(e.target.value)}} type='text' className='search' placeholder='Search by name, species or type...'/>
      <div className='main_container'>
      {filteredData ? filteredData.map((e) => (
        <>
          <PokeCard 
            key={e.id} 
            image={e.image} 
            name={e.name}
            species={e.species}
            type={e.type}
            super_power={e.super_powers}
            species_color={e.species_color}
            card_color={e.card_color}
          />
        </>
      )) : <p>No Data</p>}
    </div>
    </div>
  )
}

export default App
