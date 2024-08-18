import { useEffect, useState, useContext } from 'react';
import { HomeWrapper, PokemonContainer, PokemonListContainer } from './styles';
import { SelectedPokeInfoContext } from '../../contexts/SelectedPokeInfo';
import { PokemonTypeColors } from "../../contexts/PokeTypeColors";
import { ThemeContext } from '../../contexts/ThemeToggler';
import { Menu } from '../../components/menu';
import { getPokemonData } from "../../services/requestAPI";
import { LoadMoreButton } from '../../components/load-more-button';
import { TypeFilter } from '../../components/filter';
import { PokemonList } from '../../components/pokemons-list';


export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [filter, setFilter] = useState("all");

    const { setPokemon: setSelectedPokemon } = useContext(SelectedPokeInfoContext);
    const typeColors = useContext(PokemonTypeColors);
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        let isMounted = true
    
        getPokemonData(setPokemons, offset, isMounted)
    
        return () => {
            isMounted = false
        }

    }, [offset, setPokemons])

    const loadMorePokemons = () => {
        setOffset((prevOffset) => prevOffset + 10)
    }

    const handlePokemonClick = (pokemon) => {
        setSelectedPokemon(pokemon)
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const types = Object.keys(typeColors)

    const filteredPokemons = filter === "all" ? pokemons : pokemons.filter(pokemon => pokemon.types.includes(filter))

    return (
        <HomeWrapper theme={theme}>
            <Menu />
            
            <PokemonContainer>
                <TypeFilter 
                    types={types}
                    handleFilterChange={handleFilterChange} 
                    filter={filter}
                />
                
                <PokemonListContainer>
                    <div>
                        <ul>
                            <PokemonList 
                                filteredPokemons={filteredPokemons}
                                handlePokemonClick={handlePokemonClick}
                                typeColors={typeColors}
                                theme={theme}
                            />
                        </ul>
                    </div>

                  <LoadMoreButton loadMorePokemons={loadMorePokemons} />
                </PokemonListContainer>
            </PokemonContainer>
        </HomeWrapper>
    )
}

