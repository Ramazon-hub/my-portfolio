import "./HomePage.scss";
import { Link } from "react-router-dom";
const HomePage = () => {
   
    return(
        <>
            <div className="home container">
                <div className="home-hero">
                    <p className="home-hero__text home-hero__me">Salom men Ramazonman</p>
                    <h1 className="home-hero__title home-hero__job">Men Frontend dasturchisiman.</h1>
                    <p className="home-hero__text home-hero__work ">Hozirga qadar real loyihalarda qatnashmaganman ammo qo'limdan ko'p ishlar keladi.Keling vaqtni behuda ketkazmaylik bu yerda mening qilgan loyihalarim:<Link to="/work" className="home-hero__link">My projects</Link></p>
                    <p className="home-hero__text home-hero__life ">Haqiqiy hayotda yaxshi suhbatdosh,qiziquvchan, o'z ishini yaxshi ko'ruvchi insonman.Bu yerda men haqimda ko'proq : <Link to="/about" className="home-hero__link">About me</Link> ✌️</p>
            </div>
            </div>
        </>
     );
};

export default HomePage;
