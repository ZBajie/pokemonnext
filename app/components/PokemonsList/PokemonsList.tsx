"use client"
import React, { useEffect, useState } from "react"

type PokemonsProps = {
  count: number
  next: string
  previous: string
  results: ResultProps[]
}
type ResultProps = {
  name: string
  url: string
}

type UpdatePokemonSingleUrlProps = {
  updatePokemonSingleUrl: (updatePokemonSingleUrl: string) => void
}

const PokemonList: React.FC<UpdatePokemonSingleUrlProps> = ({
  updatePokemonSingleUrl,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemonsUrl, setPokemonsUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  )
  const [pokemons, setPokemons] = useState({} as PokemonsProps)

  useEffect(() => {
    let isMounted = true
    const getPokemons = async () => {
      try {
        const result = await fetch(pokemonsUrl)
        const data = await result.json()
        if (isMounted) {
          console.log(data)
          setPokemons(data)
        }
      } catch (e) {
        console.log(e)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }
    getPokemons()
    return () => {
      isMounted = false
    }
  }, [pokemonsUrl])
  return (
    <section className="pokemons-list">
      <h2>Pokemons</h2>
      {isLoading ? (
        <p>Loading ..</p>
      ) : (
        <>
          <ul>
            {pokemons.results &&
              pokemons.results.map((item, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      updatePokemonSingleUrl(item.url)
                    }}
                  >
                    {item.name}
                  </li>
                )
              })}
          </ul>
          <button
            onClick={() => {
              setPokemonsUrl(pokemons.previous)
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              setPokemonsUrl(pokemons.next)
            }}
          >
            Next
          </button>
        </>
      )}
    </section>
  )
}

export default PokemonList
