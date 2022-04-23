import React from 'react'
import { useSelector } from 'react-redux'
import './pokedex.css'
import PokedexScreen from './PokedexScreen'
import PokemonForm from './PokemonForm'

function Pokedex() {
  const loading = useSelector((state) => state.loading)
  return (
    <div className='pokedex'>
      <div className='pokedex-body'>
        <div className='pokedex-body-top'>
          <div className={`light is-sky is-big ${loading && 'is-animated'}`} />
          <div className='light is-red' />
          <div className='light is-yellow' />
          <div className='light is-green' />
        </div>
        <div className='pokedex-screen-container'>
          <PokedexScreen />
        </div>
        <div className='pokedex-body-bottom'>
          <div className='pokedex-body-bottom-lights'>
            <div className='light is-blue is-medium' />
            <div className='light is-green is-large' />
            <div className='light is-orange is-large' />
          </div>
          <PokemonForm />
        </div>
      </div>
    </div>
  )
}

export default Pokedex
