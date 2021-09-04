import './ReactProjects'
import { Link } from 'react-router-dom'
import todoreact1 from '../../assets/imgs/todoreact1.png'
import todoreact2 from '../../assets/imgs/todoreact2.png'
import youtube1 from '../../assets/imgs/youtube1.png'
import youtube2 from '../../assets/imgs/youtube2.png'
import youtubeLogo from '../../assets/imgs/youtube-logo.svg'
import twitter1 from '../../assets/imgs/twitter.1.png'
import twitter2 from '../../assets/imgs/twitter2.png'
import twitterLogo from '../../assets/imgs/twitter-logo.png'
import food1 from '../../assets/imgs/food.1.png'
import food2 from '../../assets/imgs/food.2.png'
import foodLogo from '../../assets/imgs/food-logo.svg'



function ReactProjects(){
    return(
        <div className="projects container">
            <Link to="/work" className="back">Go Back</Link>
            <ul className="projects-list">
                <li className="projects-list__item">
                     <a href="https://i-todo-react-app.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={todoreact1} alt="img" width="380px" height="200px" className="projects__img namangan--1" />
                        <img src={todoreact2} alt="img" width="380px" height="200px" className="projects__img namangan--2" />
                    </a>
                    
                    <a href="https://i-todo-react-app.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">To Do App ( by React.Js )</a>
                </li>
                <li className="projects-list__item">
                     <a href="https://i-youtubeclone-ramazon.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={youtube1} alt="img" width="380px" height="200px" className="projects__img namangan--1" />
                        <img src={youtube2} alt="img" width="380px" height="200px" className="projects__img namangan--2" />
                    </a>
                    <a href="https://i-youtubeclone-ramazon.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">
                    <img src={youtubeLogo} alt="img" width="200px"/>

                    </a>
                </li>
                <li className="projects-list__item">
                     <a href="https://mytwitter-app.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={twitter1} alt="img" width="380px" height="200px" className="projects__img namangan--1" />
                        <img src={twitter2} alt="img" width="380px" height="200px" className="projects__img namangan--2" />
                    </a>
                    <a href="https://mytwitter-app.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">
                    <img src={twitterLogo} alt="img" width="200px"/>

                    </a>
                </li>
                <li className="projects-list__item">
                     <a href="https://food-dashboard-app.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={food1} alt="img" width="380px" height="200px" className="projects__img namangan--1" />
                        <img src={food2} alt="img" width="380px" height="200px" className="projects__img namangan--2" />
                    </a>
                    <a href="https://food-dashboard-app.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">
                    <img src={foodLogo} alt="img" width="200px" className="food-logo"/>

                    </a>
                </li> 
            </ul>
        </div>
    )
}
export default ReactProjects