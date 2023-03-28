import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
   return (
      <div className='header'>
         <header>
        <h1 class="header__logo"><Link to="/">BigDad</Link></h1>
        <ul class="header__nav">
          <li><Link to="/">Основне</Link></li>
          <li><Link to="dessert"> Десерти</Link></li>
          <li><Link to="bar">Бар</Link></li>
          <li><Link to="pizza">Піца</Link></li>
        </ul>
        <div class="header__phone">+380 00 111 5535</div>
      </header>
      </div>
   )
}