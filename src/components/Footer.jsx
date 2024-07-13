import facebookLogo from "../assets/facebookLogo.svg"
import instagramLogo from "../assets/instagramLogo.svg"
import "./css/Footer.css"
const Footer = () => {
    return (
            <footer id="footerSection">

                <h2>Follow Us</h2>
                <div id="socialLogosContainer">
                    <img className="socialLogos" src={facebookLogo} alt="facebook logo" width="13px"/>
                    <img className="socialLogos" src={instagramLogo} alt="instagram logo" width="20px" />
                </div>
                
                <p>&copy; BOILING POINT RESTAURANT. All rights Reserved</p>
            </footer>
    )
}

export {Footer}