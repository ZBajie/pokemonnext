import React, { useRef } from "react"

type UpdatePokemonSingleUrlProps = {
  updatePokemonSingleUrl: (UpdatePokemonSingleUrl: string) => void
}

const PokemonSearch: React.FC<UpdatePokemonSingleUrlProps> = ({
  updatePokemonSingleUrl,
}) => {
  const searchPokemon = useRef<HTMLInputElement>(null)
  return (
    <section className="pokemon-search">
      <h2>Search Pokemon</h2>
      <div>
        <input
          type="search"
          placeholder="Full name needed"
          ref={searchPokemon}
        />
        <button
          onClick={() => {
            if (searchPokemon.current) {
              updatePokemonSingleUrl(
                `https://pokeapi.co/api/v2/pokemon/${searchPokemon.current.value.toLowerCase()}/`
              )
              searchPokemon.current.value = ""
              searchPokemon.current.focus()
            }
          }}
        >
          Search
        </button>
      </div>
    </section>
  )
}

export default PokemonSearch
