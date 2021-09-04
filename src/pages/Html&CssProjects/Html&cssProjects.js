import './Html&cssProjects.scss'
import { Link } from 'react-router-dom'
import easybank1 from '../../assets/imgs/easybank1.png'
import easybank2 from '../../assets/imgs/easybank2.png'
import easybankLogo from '../../assets/imgs/easybank-logo.svg'
import afrianska1 from '../../assets/imgs/afrianska1.png'
import afrianska2 from '../../assets/imgs/afrianska2.png'
import afrianskaLogo from '../../assets/imgs/afrianska-logo.svg'
import trafalgar1 from '../../assets/imgs/trafalgar1.png'
import trafalgar2 from '../../assets/imgs/trafalgar2.png'
import trafalgarLogo from '../../assets/imgs/trafalgar-logo.svg'
import audiophile1 from '../../assets/imgs/audiophile1.png'
import audiophile2 from '../../assets/imgs/audiophile2.png'
import audiophileLogo from '../../assets/imgs/audiophile-logo.svg'
import myteam1 from '../../assets/imgs/myteam1.png'
import myteam2 from '../../assets/imgs/myteam2.png'
import myteamLogo from '../../assets/imgs/myteam-logo.svg'
import namangamliklar24 from '../../assets/imgs/namanganliklar24.png'
import namangamliklar242 from '../../assets/imgs/namanganliklar242.png'
import namanganLogo from '../../assets/imgs/namangan-logo.svg'
import pixer1 from '../../assets/imgs/pixer1.png'
import pixer2 from '../../assets/imgs/pixer2.png'
import pixerLogo from '../../assets/imgs/pixer-logo.svg'
import productly1 from '../../assets/imgs/productly1.png'
import productly2 from '../../assets/imgs/productly2.png'
import productlyLogo from '../../assets/imgs/productly-logo.svg'
import vetclinic1 from '../../assets/imgs/vetclinic1.png'
import vetclinic2 from '../../assets/imgs/vetclinic2.png'
import vetclinicLogo from '../../assets/imgs/vetclinic-logo.svg'

function HtmlCssProjects(){
    return(
        <div className="projects container">
            <Link to="/work" className="back">Go Back</Link>
            <ul className="projects-list">
                <li className="projects-list__item">
                    <a href="https://easybank-i.netlify.app"  target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={easybank1} alt="img" width="380px" height="200px" className="projects__img easybank--1" />  
                        <img src={easybank2} alt="img" width="380px" height="200px" className="projects__img easybank--2" />  
                    </a>
                    <a href="https://easybank-i.netlify.app"  target="_blank" rel="noreferrer" className="projects-list__link">
                        <img src={easybankLogo} alt="img" width="200px"/>
                        {/* <span>Easybank.Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</span> */}
                        </a>

                </li>
                <li className="projects-list__item">
                     <a href="https://pixer-edu-platform.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link--img">
                        <img src={pixer1} alt="img" width="380px" height="200px" className="projects__img pixer--1" />
                        <img src={pixer2} alt="img" width="380px" height="200px" className="projects__img pixer--2" />

                     </a>
                    <a href="https://pixer-edu-platform.netlify.app/" target="_blank"  rel="noreferrer"className="projects-list__link">
                    <img src={pixerLogo} alt="img" width="100px" />

                    </a>
                </li>
                <li className="projects-list__item">
                    <a href="https://audiophile-relax.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={audiophile1} alt="img" width="380px" height="200px" className="projects__img audiophile--1" />
                        <img src={audiophile2} alt="img" width="380px" height="200px" className="projects__img audiophile--2" />
                    </a>
                    <a href="https://audiophile-relax.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">
                    <img src={audiophileLogo} alt="img" width="180px"/>
                        
                    </a>
                </li>
                <li className="projects-list__item">
                    <a href="https://i-my-team.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={myteam1} alt="img" width="380px" height="200px" className="projects__img myteam--1" />
                        <img src={myteam2} alt="img" width="380px" height="200px" className="projects__img myteam--2" />
                    </a>
                    <a href="https://i-my-team.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">
                    <img src={myteamLogo} alt="img" width="150px"/>

                    </a>
                </li> 
                <li className="projects-list__item" >
                    <a href="https://vet-clinc.netlify.app" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={vetclinic1} alt="img" width="380px" height="200px" className="projects__img vetclinc--1" />
                        <img src={vetclinic2} alt="img" width="380px" height="200px" className="projects__img vetclinc--2" />
                    </a>
                    <a href="https://vet-clinc.netlify.app" target="_blank" rel="noreferrer" className="projects-list__link">
                    <img src={vetclinicLogo} alt="img" width="200px"/>
                        </a>
                </li>
                 <li className="projects-list__item">
                    <a href="https://namangamliklar24.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={namangamliklar24} alt="img" width="380px" height="200px" className="projects__img namangan--1" />
                        <img src={namangamliklar242} alt="img" width="380px" height="200px" className="projects__img namangan--2" />
                    </a>
                    <a href="https://namangamliklar24.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">
                    <img src={namanganLogo} alt="img" width="300px"/>

                    </a>
                </li> 
                <li className="projects-list__item">
                    <a href="https://productly-sale-app.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={productly1} alt="img" width="380px" height="200px" className="projects__img productly--1" />
                        <img src={productly2} alt="img" width="380px" height="200px" className="projects__img productly--2" />
                    </a>
                    <a href="https://productly-sale-app.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">
                     <img src={productlyLogo} alt="img" width="250px"/>

                    </a>
                </li>
                 <li className="projects-list__item">
                    <a href="https://ramazon-hub.github.io/trafalgar/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={trafalgar1} alt="img" width="380px" height="200px" className="projects__img trafalgar--1" />
                        <img src={trafalgar2} alt="img" width="380px" height="200px" className="projects__img trafalgar--2" />
                    </a>
                    <a href="https://ramazon-hub.github.io/trafalgar/" target="_blank" rel="noreferrer" className="projects-list__link">
                     <img src={trafalgarLogo} alt="img" width="250px"/>

                    </a>
                </li>
                <li className="projects-list__item">
                    <a href="https://i-afrianska.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link--img">
                        <img src={afrianska1} alt="img" width="380px" height="200px" className="projects__img afrianska--1" />
                        <img src={afrianska2} alt="img" width="380px" height="200px" className="projects__img afrianska--2" />
                    </a>
                    <a href="https://i-afrianska.netlify.app/" target="_blank" rel="noreferrer" className="projects-list__link">
                         <img src={afrianskaLogo} alt="img" width="150px"/>
                        </a>
                </li>
            </ul>
        </div>
    )
}

export default HtmlCssProjects