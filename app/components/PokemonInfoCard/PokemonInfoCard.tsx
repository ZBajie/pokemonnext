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
  const [errorPopup, setErrorPopup] = useState(false)
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
        if (isMounted) {
          setErrorPopup(true)
        }
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
      <div className="pokemon-card">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          pokemonName && (
            <>
              <h2>{pokemonName}</h2>
              <div className="pokemon-info-card-image-div">
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
            </>
          )
        )}
        {errorPopup && (
          <>
            <div className="error-box-background"></div>
            <div className="error-box">
              <button
                onClick={() => {
                  setErrorPopup(false)
                }}
              >
                Close
              </button>
              <p>Search failed</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default PokemonInfoCard
