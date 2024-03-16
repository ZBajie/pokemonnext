"use client"

import React, { useState } from "react"
import Header from "../components/Header/Header"
import PokemonInfoCard from "../components/PokemonInfoCard/PokemonInfoCard"
import PokemonsList from "../components/PokemonsList/PokemonsList"
import PokemonSearch from "../components/PokemonSearch/PokemonSearch"

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
        <div>
          <PokemonInfoCard
            pokemonSingleUrl={pokemonSingleUrl}
            updatePokemonImageUrl={updatePokemonImageUrl}
          />
          <PokemonSearch updatePokemonSingleUrl={updatePokemonSingleUrl} />
        </div>
        <PokemonsList updatePokemonSingleUrl={updatePokemonSingleUrl} />
      </div>
      <div className="poke">Pokemons</div>
    </main>
  )
}

export default Pokemons
