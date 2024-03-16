import Header from "./components/Header/Header"

export default function Home() {
  return (
    <>
      <Header pokemonImageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" />
      <main>
        <a href="./pokemons">Pokemons</a>
      </main>
    </>
  )
}
