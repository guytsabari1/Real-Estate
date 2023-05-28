import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../../components/Contact/Contact.css';


function Contact() {

    return(
        <div id="contact-section">
        <h1 id="contact-us-title">CONTACT US</h1>
        <h4>
        Thank you for visiting our real estate website.
        We're here to assist you with any inquiries or concerns.
        Our dedicated team of professionals is committed to providing
        exceptional service and guiding you through buying, selling,
        or renting properties. Contact us today to discuss your needs
        and let's make your real estate goals a reality.
        </h4>

        <div id="details">

        <span className="one-detail-line"> <PhoneInTalkIcon/>  08-8219643</span>
        <span className="one-detail-line"> <AlternateEmailIcon/> DeluxeProp@gmail.com</span>
        <span className="one-detail-line"> <LocationOnIcon/>  ISR</span>
        </div>
        
        </div>
        
    )
    
 }



export default Contact

  
