import logo from '../assets/logo.svg'
import './css/main-header.scss'
import { Link } from 'react-router-dom'

export const MainHeader = function () {
  return (
    <header className='main-header'>
      <img src={logo} alt=""/>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  )
}
