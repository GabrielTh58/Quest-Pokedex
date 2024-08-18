import { Link } from 'react-router-dom';
import { ImageContainer, PokemonId, List, PokemonName, ListContainer } from './styles';
export const PokemonList = (props) => {

    const { filteredPokemons, handlePokemonClick, typeColors, theme } = props

    return (
        <ListContainer>
            {filteredPokemons.map((pokemon, index) => {
                const primaryTypeColor = typeColors[pokemon.types[0]] || '#ffcaa7';
                return (
                    <List key={index} $typeColor={primaryTypeColor} theme={theme}>
                        <Link to={`/details/${pokemon.name}`} onClick={() => handlePokemonClick(pokemon)}>
                            <PokemonId>{`#0${pokemon.data.id}`}</PokemonId>
                            <ImageContainer>
                                <img src={pokemon.image} alt={`image of ${pokemon.name}`} />
                            </ImageContainer>
                            <div>
                                <PokemonName theme={theme}>{pokemon.name}</PokemonName>
                            </div>
                        </Link>
                    </List>
                )
            })}
        </ListContainer>
    )
}


