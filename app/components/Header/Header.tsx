import React from "react"
import Image from "next/image"

type PokemonImageUrlProps = {
  pokemonImageUrl: string
}

const Header: React.FC<PokemonImageUrlProps> = ({ pokemonImageUrl }) => {
  return (
    <header className="header-main">
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        width={200}
        height={200}
        alt="Pokemon"
      />
      <h1>Pokemons</h1>
      <Image src={pokemonImageUrl} width={200} height={200} alt="Pokemon" />
    </header>
  )
}

export default Header
