"use client"

import React, { useState } from "react"
import Header from "../components/Header/Header"
import PokemonInfoCard from "../components/PokemonInfoCard/PokemonInfoCard"
import PokemonsList from "../components/PokemonsList/PokemonsList"

const Pokemons = () => {
  const [pokemonSingleUrl, setPokemonSingleUrl] = useState("")

  const updatePokemonSingleUrl = (pokemonSingleUrl: string) => {
    setPokemonSingleUrl(pokemonSingleUrl)
  }

  const [pokemonImageUrl, setPokemonImageUrl] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  )

  const updatePokemonImageUrl = (pokemonImageUrl: string) => {
    setPokemonImageUrl(pokemonImageUrl)
  }

  return (
    <main className="main-pokemons">
      <Header pokemonImageUrl={pokemonImageUrl} />
      <div>
        <PokemonInfoCard
          pokemonSingleUrl={pokemonSingleUrl}
          updatePokemonImageUrl={updatePokemonImageUrl}
        />
        <PokemonsList updatePokemonSingleUrl={updatePokemonSingleUrl} />
      </div>
      <div className="poke">Pokemons</div>
    </main>
  )
}

export default Pokemons
