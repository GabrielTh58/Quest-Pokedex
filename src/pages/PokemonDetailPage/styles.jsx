import styled from 'styled-components';


export const PokemonDetailsWrapper = styled.section`
    width: 100vw;
    min-height: 100vh;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DetailsSection = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
`


export  const TypeListItem = styled.li`
    padding: 3px 10px;
    border-radius: 5px;
    font-size: 12px;
    box-shadow: 0 3px 15px rgba(100,100,100,0.5);
    text-transform: capitalize;
    font-weight: 400;
`


