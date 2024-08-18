import styled,  { keyframes } from "styled-components"
import { PokebolaAnimate } from '../../components/menu/styles';

const buttonAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadMorePokemonButton = styled.button`
    display: flex;
    align-items: center;
    margin: 50px 0;
    padding: 15px 30px;
    border: none;
    border-radius: 15px;
    color: white;
    background-color: #721919;
    cursor: pointer;
    box-shadow: 0 3px 15px rgba(100,100,100,0.5);
    transition: 0.3s ease-in-out;
    animation: ${buttonAnimation} 0.8s ease-in-out infinite alternate;
    
    @media(max-width: 1250px){
        margin: 50px 0;
    }

    &:hover{
        opacity: 1;
        transform: scale(1.1,1.1);

        img{
            animation: ${PokebolaAnimate} 0.5s alternate infinite;
        }
    }

    img{
        width: 25px;
        height: 25px;
        margin-left: 5px;
    }

`