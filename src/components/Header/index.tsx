import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        {/* <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink> */}
        <span>
          <MapPin size={24} weight="fill" />
          Porto Velho, RO
        </span>
        <NavLink to="/cart" title="Histórico">
          <ShoppingCart weight="fill" size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
