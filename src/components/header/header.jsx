import { Link } from 'react-router-dom';
import '../style/header.css';
import '../style/media.css'
import { useState } from 'react';

export default function Header() {

const [isActive, setIsActive] = useState(false);

function show() {
setIsActive(!isActive);
};

   return (
      <div className='header'>
         <header>
            <div className='logo__wrapper'>
               <h1 className="header__logo"><Link to="/">BigDad</Link></h1>
               <div className='header__burger' onClick={show}>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </div>
        <ul id="header__nav" className={isActive ? "header__nav" : "header__nav show"}>
          <li><Link to="/">Основне</Link></li>
          <li><Link to="dessert"> Десерти</Link></li>
          <li><Link to="bar">Бар</Link></li>
          <li><Link to="pizza">Піца</Link></li>
        </ul>

        <div className='icon__cart'><Link to="cart">
         
         <img src="/images/icon/cart1.svg" alt="" /></Link></div>
        <div className="header__phone">+380 00 111 5535</div>
         </header>
      </div>
   )
}