import './Work.scss';

import html from '../../assets/imgs/html5-brands.svg'
import js from '../../assets/imgs/js-square-brands.svg'
import react from '../../assets/imgs/react-brands.svg'
import css from '../../assets/imgs/css3-alt-brands.svg'
import { Link } from 'react-router-dom';
function Work(){
    return(
    <>
        <div className="works container">
            <div className="works-content">
                <div className="skils">
                        <div className="skils__div">
                             <Link to="/html&css&projects" className="skils__link">
                                <div className="skils__img htmlcss ">
                                    <img src={html} className=" skils__img--html" alt="img"/>
                                    <img src={css} className="  skils__img--css" alt="img" />
                                </div>
                                <p className="skils__name">HTML and CSS</p>
                            </Link>
                                <span className="skils__text htmlcss">Lorem ispum dollar Lorem ispum dollar Lorem ispum dollar Lorem ispum dollar Lorem ispum dolllar</span>
                        </div>
                        <div className="skils__div">
                            <Link to="/javascript&projects" className="skils__link">
                                <img src={js} className="skils__img skils__img--js" alt="img"/>
                                <p className="skils__name">JavaScript</p>
                            </Link>
                                <span className="skils__text js-text">Lorem ispum dollar Lorem ispum dollar Lorem ispum dollar Lorem ispum dollar Lorem ispum dolllar</span>
                        </div>
                        
                        <div className="skils__div">
                            <Link to="/react&projects" className="skils__link">
                                <img src={react} className="skils__img skils__img--js" alt="img"/>
                                  <p className="skils__name">React (Js)</p>  
                             </Link>
                            <span className="skils__text react-text">Lorem ispum dollar Lorem ispum dollar Lorem ispum dollar Lorem ispum dollar Lorem ispum dolllar</span>
                        </div>                
                </div>
            </div>
           
        </div>
    </>
    )
}
export default Work