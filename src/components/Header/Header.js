import './Header.scss'
import { NavLink } from "react-router-dom";

import close from '../../assets/imgs/close.svg';
function Header(){
    const rotate = () =>{
       const header =  document.querySelector(".header__content")
       header.classList.add("block");
    }
    const closeFn = () =>{
       const header =  document.querySelector(".header__content")
        header.classList.remove('block')
    }
    return(
        <div className="header ">
            <header className="header__content ">
                <nav className="header-nav container ">
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className="nav-list__link" activeClassName="nav-list__link-active" exact >Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/about" className="nav-list__link" activeClassName="nav-list__link-active" exact >About me</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/work" className="nav-list__link" activeClassName="nav-list__link-active" >Work</NavLink>
                        </li>
                        {/* <li className="nav-list__item">
                            <NavLink to="/writing" className="nav-list__link" activeClassName="nav-list__link-active" >My blogs</NavLink>
                        </li> */}
                        <li className="nav-list__item">
                            <NavLink to="/contact" className="nav-list__link" activeClassName="nav-list__link-active" >Contact</NavLink>
                        </li>
                    </ul>
                   <img src={close} alt="close" width="30px" height="30px" className="close" onClick={closeFn} />
                </nav>
            </header>
            <div className="menu" onClick={rotate} >
                <div className="menu__line"></div>
                <div className="menu__line"></div>
                <div className="menu__line"></div>
            </div>
        </div>
    )
}
export default Header