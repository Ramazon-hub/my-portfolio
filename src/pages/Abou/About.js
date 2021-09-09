import './About.scss'

function About(){
    return(
        <>
        <div className="about container">
            <div className="about-hero">
            {/* <h1 className="about-hero__title">Hech kim bizga yordam berish majburiyatini olmagan.</h1> */}
            {/* <h1 className="about-hero__title">Mening ism,familyam Ramazon Pardayev.</h1> */}
            <p className="about-hero__text">Hayotda o'z ishimga masuliyatli,boshlagan ishimni nihoyasiga yetkazuvchi insonman.Do'stlarim, yaqinlarim bilan birga vaqt o'tkazishni yaxshi ko'raman.</p>
            <p className="about-hero__future">Mening  maqsadlarim.</p>
            <ul className="about-list">
                <li className="about-list__item">So'ngi 5 yil ichida :</li>
                <li className="about-list__item">O'z sohamni professionali bo'lib full stack dasturchi bo'lish.</li>
                <li className="about-list__item">Magistraturani Americada o'qib tajribamni va bilimlarimni yanada mustahkamlash.</li>
                <li className="about-list__item">O'zim uchun jamoa yi'gib team lider bo'lish va o'z frilance kompaniyamni ishga tushirish.</li>
                <li className="about-list__item">Keyingi 5 yil ichida :</li>
                <li className="about-list__item">O'rgangan bilim va tajribalarimni ilm ahliga o'rgatish.</li>
                <li className="about-list__item">Zamonaviy kasblarni o'rgatuvchi maktablarni shakllantirish.</li>

            </ul>
            <p className="about-hero__text"></p>

                
            </div>
        </div>
        </>
    )
}
export default About