import styled, { keyframes } from 'styled-components'

export const movePokemonAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY( -2px);
    }
`

export const ListContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-auto-rows: 1fr;
    gap: 15px;
    text-transform: capitalize;
    place-items: center;
`

export const List = styled.li`
    width: 200px;
    padding: 20px 0px;
    box-shadow: 0 3px 15px rgba(100,100,100,0.5);
    border-radius: 10px;
    text-align: center;
    transition: 0.3s ease-in-out;
    background-color: ${props => props.$typeColor};
  

    img{
        margin: 0 auto;
        animation: ${movePokemonAnimation} 0.8s ease-in-out infinite alternate;
    } 

    &:hover{
        transform: translate(0, -7px);
    }
`

export const PokemonId = styled.div`
    width: fit-content;
    border-radius: 20%;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.5px;
    color: #000;
    text-align: start;
    margin: 0 0 10px 20px;
    padding: 2px 5px;
    box-shadow: 0 3px 15px rgba(100,100,100,0.5);
   
  
`

export const PokemonName = styled.h2`
    font-size: 20px;
    color: ${props => props.theme.color};
    font-weight: 700;
`


export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,0.6);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: 0 auto 40px auto;

    img{
        max-width: 90%;
    }
`