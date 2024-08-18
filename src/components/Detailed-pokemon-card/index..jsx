import { PokemonCard,  TitleContainer, ImageContainer, PokemonDetails, InfoContainer, PokemonInfo, ButtonContainer, ShowMoreButton } from "./styles";
export const DetailedPokemonCard = (props) => {
    
    const { pokemon, theme, handleShowMoreMoves, primaryTypeColor, renderTypes, renderAbilities, renderMoves } = props;

    return (
        <PokemonCard>
            <div style={{ backgroundColor: primaryTypeColor }}>
                <TitleContainer>
                    <h1>{`#0${pokemon.data.id} ${pokemon.name}`}</h1>
                    {renderTypes()}
                </TitleContainer>

                <ImageContainer>
                    <img src={pokemon.image} alt={pokemon.name} />
                </ImageContainer>
            </div>

            <PokemonDetails theme={theme}>
                <InfoContainer>
                    <PokemonInfo>
                        <h2>Abilities</h2>
                        {renderAbilities()}
                    </PokemonInfo>

                    <PokemonInfo>
                        <h2>Moves</h2>
                        {renderMoves()}

                        <ButtonContainer>
                            <ShowMoreButton onClick={handleShowMoreMoves} style={{ backgroundColor: primaryTypeColor }}>
                                Mostrar mais...
                            </ShowMoreButton>
                        </ButtonContainer>
                        
                    </PokemonInfo>
                </InfoContainer>
            </PokemonDetails>
        </PokemonCard>
    )
}