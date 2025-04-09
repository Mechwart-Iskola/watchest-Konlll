import 'boxicons/css/boxicons.min.css';

import Cart from '../Cart/Cart';
import './header.css'
import { useRef, useState } from 'react';

const Header = () => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [showCart, setShowCart] = useState(false)

  {/*Adj a theme ikonhoz egy olyan funkciót amivel váltogatni lehet a light és dark mode között*/}
  
  {/*Adj egy funkciót a toggle ikonhoz amivel mobilnézetben le lehet nyitni a navigációs menüt a close ikonnal meg bezárni*/}

  {/*
    Adj egy funkciót a cart-shop ikonhoz amivel le lehet nyitni a vásárlási listát
    A vásárlási lista egy külön komponens.
    */}

  {/* Állítsd be az App.css-ben az ul osztályszelektornak, hogy a listaelemek pontok nélkül jelenjenek meg */}

  

  return (
    <>
    <header className="header" id="header">
    <nav >
        <a href="#" className="nav__logo">
            <i className='bx bxs-watch nav__logo-icon'></i> Rolex
        </a>
        <div className="nav__menu"  id="nav-menu" ref={menuRef}>      
            <ul className="nav__list">
                {/*
                Készítsd el a Header-eket: Home, Featured, Products, New
                Mindegyik egy listaelem, és azon belül egy hivatkozás
                a listaelem ostrálya nav__item, a hivatkozás osztálya nav__link
                */}
                <li className='nav__item'>
                    <a href="#home" className='nav__link'>Home</a>
                </li>
                <li className='nav__item'>
                    <a href="#featured" className='nav__link'>Featured</a>
                </li>
                <li className='nav__item'>
                    <a href="#products" className='nav__link'>Products</a>
                </li>
                <li className='nav__item'>
                    <a href="#new" className='nav__link'>New</a>
                </li>
            </ul>
            <div className="nav__close" id="nav-close">
                <i className='bx bx-x' onClick={() => menuRef?.current?.classList.toggle("show-menu")}></i>
            </div>
        </div>
        <div className="nav__btns">
            <i className='bx bx-moon change-theme' id="theme-button" onClick={(e) => {
                document.body.classList.toggle("dark-theme");
                (e.target as HTMLElement).classList.toggle("bx-moon");
                (e.target as HTMLElement).classList.toggle("bx-sun");
            }}></i>
            <div className="nav__shop" id="cart-shop" >
                <i className='bx bx-shopping-bag' onClick={() => setShowCart(!showCart)}></i>
            </div>
            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-grid-alt' onClick={() => menuRef?.current?.classList.toggle("show-menu")}></i>
            </div>
        </div>
    </nav>
</header>
{/*Itt jelenjen meg a Cart ha az ikonra kattintottunk */}
 </>
  )
}

export default Header