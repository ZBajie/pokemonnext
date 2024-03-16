"use client"
import Image from "next/image"

import React, { useEffect, useState } from "react"

type PokemonSingleUrlProps = {
  pokemonSingleUrl: string
  updatePokemonImageUrl: (pokemonImageUrl: string) => void
}

const PokemonInfoCard: React.FC<PokemonSingleUrlProps> = ({
  pokemonSingleUrl,
  updatePokemonImageUrl,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const pokemonUrl = pokemonSingleUrl
  const [pokemonFrontImage, setPokemonFrontImage] = useState("")
  const [pokemonBackImage, setPokemonBackImage] = useState("")

  // Pokemon data
  const [pokemonName, setPokemonName] = useState("")

  useEffect(() => {
    let isMounted = true
    const getPokemonInfo = async () => {
      try {
        setIsLoading(true)
        const result = await fetch(pokemonUrl)
        const data = await result.json()
        if (isMounted) {
          console.log(data)
          setPokemonName(data.name)
          setPokemonFrontImage(data.sprites.front_default)
          setPokemonBackImage(data.sprites.back_default)
          updatePokemonImageUrl(data.sprites.front_default)
        }
      } catch (err) {
        console.log(err)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }
    getPokemonInfo()
    return () => {
      isMounted = false
    }
  }, [pokemonUrl, updatePokemonImageUrl])

  return (
    <>
      {pokemonName && (
        <div className="pokemon-card">
          <h2>{pokemonName}</h2>
          <div>
            {pokemonFrontImage && (
              <Image
                src={pokemonFrontImage}
                width={200}
                height={200}
                alt="Pokemon"
              />
            )}
            {pokemonBackImage && (
              <Image
                src={pokemonBackImage}
                width={200}
                height={200}
                alt="Pokemon"
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default PokemonInfoCard
