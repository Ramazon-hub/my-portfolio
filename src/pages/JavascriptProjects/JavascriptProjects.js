import './JavascriptProjects.scss'
import { Link } from 'react-router-dom'
import domd1 from '../../assets/imgs/domd1.png'
import domd2 from '../../assets/imgs/domd2.png'
import domdLogo from '../../assets/imgs/domd-logo.svg'
import film1 from '../../assets/imgs/film1.png'
import film2 from '../../assets/imgs/film2.png'
import todojs1 from '../../assets/imgs/todo-js.png'
import todojs2 from '../../assets/imgs/todo-js2.png'
import sliderjs1 from '../../assets/imgs/js-slider1.png'
import sliderjs2 from '../../assets/imgs/js-slider2.png'
import furniture1 from '../../assets/imgs/furniture1.png'
import furniture2 from '../../assets/imgs/furniture2.png'
import furnitureLogo from '../../assets/imgs/furniture-logo.svg'
import pokemon1 from '../../assets/imgs/pokemon1.png'
import pokemon2 from '../../assets/imgs/pokemon2.png'
import onlineCinema1 from '../../assets/imgs/online-cinema0.png'
import onlineCinema2 from '../../assets/imgs/online-cinema1.png'


function JavascriptProjects(){
    return(
        <div className="projects container">
            <Link to="/work" className="back">Go Back</Link>
            <ul className="projects-list">
                <li className="projects-list__item">
                    <a href="https://dom-d-team-project.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link--img">
                        <img src={domd1} alt="img" width="380px" height="200px" className="projects__img pixer--1" />
                        <img src={domd2} alt="img" width="380px" height="200px" className="projects__img pixer--2" />

                     </a>
                    <a href="https://dom-d-team-project.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link">
                        <img src={domdLogo} alt="img"/>
                    </a>
                </li>
                <li className="projects-list__item">
                     <a href="https://js-film-site.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link--img">
                        <img src={film1} alt="img" width="380px" height="200px" className="projects__img pixer--1" />
                        <img src={film2} alt="img" width="380px" height="200px" className="projects__img pixer--2" />

                     </a>
                    <a href="https://js-film-site.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">Films</a>
                </li>
                <li className="projects-list__item">
                     <a href="https://i-todo-app-js.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link--img">
                        <img src={todojs1} alt="img" width="380px" height="200px" className="projects__img pixer--1" />
                        <img src={todojs2} alt="img" width="380px" height="200px" className="projects__img pixer--2" />

                     </a>
                    <a href="https://i-todo-app-js.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">To
                    Do App Js</a>
                </li>
                <li className="projects-list__item">
                     <a href="https://js-slider-i.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link--img">
                        <img src={sliderjs1} alt="img" width="380px" height="200px" className="projects__img pixer--1" />
                        <img src={sliderjs2} alt="img" width="380px" height="200px" className="projects__img pixer--2" />

                     </a>
                    <a href="https://js-slider-i.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">Js Slider</a>
                </li>
                 
                <li className="projects-list__item">
                     <a href="https://js-pokemon-corton.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link--img">
                        <img src={pokemon1} alt="img" width="380px" height="200px" className="projects__img pixer--1" />
                        <img src={pokemon2} alt="img" width="380px" height="200px" className="projects__img pixer--2" />

                     </a>
                    <a href="https://js-pokemon-corton.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">Pokemons corton hero</a>
                </li> 
                <li className="projects-list__item">
                     <a href="https://i-furniture-shop.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link--img">
                        <img src={furniture1} alt="img" width="380px" height="200px" className="projects__img pixer--1" />
                        <img src={furniture2} alt="img" width="380px" height="200px" className="projects__img pixer--2" />

                     </a>
                    <a href="https://i-furniture-shop.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">
                    <img src={furnitureLogo} alt="img" width="120px"/>
                    </a>
                </li>
                <li className="projects-list__item">
                     <a href="https://cinemacom.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link--img">
                        <img src={onlineCinema1} alt="img" width="380px" height="200px" className="projects__img pixer--1" />
                        <img src={onlineCinema2} alt="img" width="380px" height="200px" className="projects__img pixer--2" />

                     </a>
                    <a href="https://cinemacom.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">online-cinema-site</a>
                </li> 
                
            </ul>
        </div>
    )
}
export default JavascriptProjects