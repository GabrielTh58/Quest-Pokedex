import axios from 'axios'
async function getPokemons(offset) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        return response.data.results
    } catch (error) {
        console.log(`Error fetching Pokemon: ${error}`)
    }
}
async function getPokemonData(setPokemons, offset, isMounted) {
    try {
        const pokemonData = await getPokemons(offset);
        const pokemonWithImages = await Promise.all(
            pokemonData.map(async (poke) => {
                const pokemonDetails = await axios.get(poke.url)
                const image = pokemonDetails.data.sprites.front_default
                const types = pokemonDetails.data.types.map((type) => type.type.name)
                return { ...poke, image, types, data: pokemonDetails.data }
            })
        )

        if (isMounted) {
            setPokemons((prevPokemons) => {

                const newPokemonList = [...prevPokemons, ...pokemonWithImages]
                return Array.from(new Set(newPokemonList.map(p => p.name))).map(name => 
                    newPokemonList.find(p => p.name === name)
                )
            })
        }
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}
async function getPokeAbility(pokemon, setAbilities){
    const abilitiesNames = pokemon.data.abilities.map((ability) => ability.ability.name)
    const responseAbilities = await Promise.all(pokemon.data.abilities.map(async (ability) => {
        const response = await axios.get(ability.ability.url)
        if (response.data && response.data.effect_entries) {
            const descriptionAbilities = response.data.effect_entries.find((entry) => entry.language.name === 'en')?.short_effect
            return descriptionAbilities || 'Description not available'
        }
        return 'Description not available'
    }))

    return setAbilities([abilitiesNames, responseAbilities])
}

export  {getPokemons, getPokeAbility, getPokemonData}