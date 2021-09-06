import './Contact.scss';

function Contact(){
    const  funcName = () =>{
        document.querySelector('.form__note--name').classList.add("form__note--visible")

    }
    const  funcEmail = () =>{
        document.querySelector('.form__note--email').classList.add("form__note--visible")

    }
    const  funcMessage = () =>{
        document.querySelector('.form__note--message').classList.add("form__note--visible")
        document.querySelector('.form__note--message').placeholder = ''

    }
return(
    <>
    <div className="contact container">
        <form className="form" method="POST" >
            <span className="form__note form__note--name">Name :</span>
            <input 
                type="text" 
                className="form__input form__input--name" 
                placeholder=" Enter your name :"
                onFocus={funcName}
            />
            <span className="form__note form__note--email">Email address :</span>
            <input 
                type="email" 
                className="form__input form__input--email" 
                placeholder=" Enter your email address :" 
                onFocus={funcEmail}
            />
            <span className="form__note form__note--message">Message :</span>
            <textarea 
                className="form__textarea form__input form__input--message" 
                placeholder=" Enter your message :"
                id="w3review"
                name="w3review"
                rows="4" 
                cols="50"
                onFocus={funcMessage} >
            </textarea>
            <button type="submit" className="form__btn">Submit</button>
        </form>
        <div className="connection">
            <a href="https://telegram.me/Ramazon_Pardayev" target="_blank" rel="noreferrer" className="connection__link connection__link--tg">Telegram</a>
            <a href="tel:+998991337153" className="connection__link connection__link--phone">Phone</a>
            <a href="https://www.instagram.com/_ramazon_pardayev_/" target="_blank" rel="noreferrer" className="connection__link connection__link--insta">Instagram</a>
            <a href="https://github.com/Ramazon-hub" target="_blank" rel="noreferrer" className="connection__link connection__link--git">GitHub</a>

        </div>
     </div>
    </>
)
}
export default Contact