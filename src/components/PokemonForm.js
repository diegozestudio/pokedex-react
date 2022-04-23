import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemon } from '../actions'

function PokemonForm() {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input !== '') {
      const pokemonID = input.toLowerCase()
      dispatch(getPokemon(pokemonID))
      setInput('')
      return
    }
  }

  return (
    <form className='pokemon-form' onSubmit={handleSubmit}>
      <input
        className='pokemon-input'
        type='text'
        name='pokemon'
        value={input}
        placeholder='Busca tu pokemon'
        onChange={(e) => setInput(e.target.value)}
        autoComplete='off'
      />
      <input type='submit' className='pokemon-btn' value='' />
    </form>
  )
}

export default PokemonForm
