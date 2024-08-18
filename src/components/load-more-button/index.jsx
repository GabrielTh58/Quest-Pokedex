import  { ButtonContainer, LoadMorePokemonButton } from "./styles"
import pokebolaIcon from '../../assets/pokebola-icon.png'
export const LoadMoreButton = (props) => {

    const { loadMorePokemons } = props

    return (
        <ButtonContainer>
            <LoadMorePokemonButton onClick={loadMorePokemons}>
                Carregar mais
                <img src={pokebolaIcon} alt="Pokebola Icon" />
            </LoadMorePokemonButton>
        </ButtonContainer>
    )
}