import { Link } from 'react-router-dom';
import './header.css';
import '../style/media.css'
import './burger'

export default function Header() {
   return (
      <div className='header'>
         <header>
        <h1 class="header__logo"><Link to="/">BigDad</Link></h1>
        <ul className="header__nav">
          <li><Link to="/">Основне</Link></li>
          <li><Link to="dessert"> Десерти</Link></li>
          <li><Link to="bar">Бар</Link></li>
          <li><Link to="pizza">Піца</Link></li>
        </ul>
        <div className='header__burger'>
         <span></span>
         </div>
        <div className='icon__cart'><Link to="cart"><img src="/images/icon/cart1.svg" alt="" /></Link></div>
        <div className="header__phone">+380 00 111 5535</div>
      </header>
      </div>
   )
}