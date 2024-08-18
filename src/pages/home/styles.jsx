import styled from "styled-components";



export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
`

export const PokemonContainer = styled.div`
    flex: 1; 
    overflow: auto;
`


export const PokemonListContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;       
`




