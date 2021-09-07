import "./HomePage.scss";
import { Link } from "react-router-dom";
const HomePage = () => {
   
    return(
        <>
            <div className="home container">
                <div className="home-hero ">
                    <p className="home-hero__text home-hero__me">Hi,I'm Ramazon</p>
                    <h1 className="home-hero__title home-hero__job">I'm Frontent developer
                    
                    
                    </h1>
                    <p className="home-hero__text">Mening biladigan texnologiyalarim</p>
                    <ul className="home-list">
                        <li className="home-list__item">Html5</li>
                        <li className="home-list__item">Css (SCSS)</li>
                        <li className="home-list__item">Bootstrapt</li>
                        <li className="home-list__item">JavaScript ( React.Js )</li>
                        <li className="home-list__item">MaterialUI</li>
                        <li className="home-list__item">GitHub ( jamoaviy ishlash )</li>
                    </ul>
                    <p className="home-hero__text home-hero__work ">Bu yerda mening qilgan loyihalarim : <Link to="/work" className="home-hero__link">My projects</Link></p>
                    <p className="home-hero__text home-hero__life ">Haqiqiy hayotda yaxshi suhbatdosh,qiziquvchan, o'z ishini yaxshi ko'ruvchi insonman.Bu yerda men haqimda ko'proq : <Link to="/about" className="home-hero__link">About me</Link> ✌️</p>
                 </div>
            </div>
        </>
     );
};

export default HomePage;
