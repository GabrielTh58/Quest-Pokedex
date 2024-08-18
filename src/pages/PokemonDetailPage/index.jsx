import { useContext, useEffect, useState } from "react"
import { Menu } from "../../components/menu/index.jsx"
import { ThemeContext } from '../../contexts/ThemeToggler.jsx'
import { SelectedPokeInfoContext } from "../../contexts/SelectedPokeInfo.jsx"
import { PokemonTypeColors } from "../../contexts/PokeTypeColors"
import  { getPokeAbility } from "../../services/requestAPI.js"
import { DetailedPokemonCard } from "../../components/Detailed-pokemon-card/index..jsx";
import { PokemonDetailsWrapper, TypeListItem, DetailsSection } from "./styles.jsx";

export const PokemonDetailPage = () => {
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [visibleMoves, setVisibleMoves] = useState(5)
    const [abilities, setAbilities] = useState([[], []])

    const { pokemon } = useContext(SelectedPokeInfoContext)
    const typeColors = useContext(PokemonTypeColors)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const types = pokemon.data.types.map(type => type.type.name)

        setPokemonTypes(types)
        getPokeAbility(pokemon, setAbilities)
    }, [pokemon])

    const renderTypes = () => (
        <ul>
            {pokemonTypes.map((type, index) => (
                <TypeListItem key={index} style={{ backgroundColor: typeColors[type] || '#FFF' }}>
                    {type}
                </TypeListItem>
            ))}
        </ul>
    )

    const renderAbilities = () => (
        <ul>
            {abilities[0].map((abilityName, index) => (
                <li key={index}>
                    <strong>{abilityName}</strong>: {abilities[1][index]}
                </li>
            ))}
        </ul>
    )

    const renderMoves = () => (
        <ul>
            {pokemon.data.moves.slice(0, visibleMoves).map((move, index) => (
                <li key={index}>{move.move.name}</li>
            ))}
        </ul>
    )

    const handleShowMoreMoves = () => {
        setVisibleMoves(visibleMoves + 5);
    }

    const primaryTypeColor = typeColors[pokemonTypes[0]] || '#ffcaa7';

    return (
        <PokemonDetailsWrapper theme={theme}>
            <Menu />

            <DetailsSection>
                <DetailedPokemonCard 
                    pokemon={pokemon}
                    theme={theme}                    
                    handleShowMoreMoves={handleShowMoreMoves}
                    renderAbilities={renderAbilities}
                    renderMoves={renderMoves}
                    renderTypes={renderTypes}
                    primaryTypeColor={primaryTypeColor}
                />
            </DetailsSection>
        </PokemonDetailsWrapper>
    )
}

