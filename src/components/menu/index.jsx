import { Link } from "react-router-dom"
import { ThemeToggler } from '../../components/theme-toggler/themeToggler'
import { MenuContainer, ThemeContainer, LogoContainer, PokeballContainer } from "./styles"
import logo from '../../assets/logo-pokemon.png'
import PokebolaIcon from '../../assets/pokebola-icon.png'

export const Menu = () => {
    return (
        <MenuContainer>
            <LogoContainer>
                <PokeballContainer>
                    <Link to="/">
                        <img src={logo} alt="logo pokemon" />
                        <img src={PokebolaIcon} alt="Pokebola Icon" />
                    </Link>
                </PokeballContainer>
            </LogoContainer>

            <ThemeContainer>
                <ThemeToggler  />
            </ThemeContainer>
        </MenuContainer>
    )
}