import './Header.scss'
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header className="header ">
            <nav className="header-nav container">
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
            </nav>
        </header>

    )
}
export default Header