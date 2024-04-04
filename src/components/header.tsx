import logo from '../assets/logo-event-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={logo} alt="logo do evento" />

      <nav className='flex items-center gap-5'>
        <NavLink title='' href="#" >Eventos</NavLink>
        <NavLink title='' href="#1" >Participantes</NavLink>
      </nav>
    </div>
  )
}