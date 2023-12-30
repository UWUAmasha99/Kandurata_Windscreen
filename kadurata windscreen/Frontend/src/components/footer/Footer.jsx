import React from 'react'
import './Footer.css'
import Logo from "./Img/1.png";
import FB from "./Img/fb.png";
import Twitter from "./Img/twitter.png";
import Instagram from "./Img/instagram.png";
import Link from "./Img/link.png";
import Youtube from "./Img/youtube.png";

export default function Footer() {
  return (
    <div>
        <div>
        <footer class="footer-distributed">

<div class="footer-left">
    {/* logo */}
    <img src={Logo} alt="Logo" height="80px" width="50px" /> 
    <h3><span>K</span>andurata<span> W</span>indscreen <span>H</span>ouse</h3>
<br/>
    
    <p class="footer-company-name">©️ Kandurata Windscreen House Pvt. Ltd.</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
          <p><span>No : 147 Kandy Rd,<br/>
           Matale, <br/>
          Central Province,<br/>
           Sri Lanka.
           </span>
          </p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>contact :  +94771126419</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:kaduratawindscreen@gmail.com">kaduratawindscreen@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>More Info About Us </span>
      Always  We offer providing best services and best products for all customers.</p>

    <div class="footer-icons">


{/* facebook */}
        <a href="https://www.facebook.com/pages/category/Business-service/Kandurata-windscreen-House-111195830315883/">
        <img src={FB} alt="fb" height="35px" width="35px" /><i class="fa fa-facebook"></i></a>

{/* twitter */}
         <a href="https://www.facebook.com/pages/category/Business-service/Kandurata-windscreen-House-111195830315883/"><i class="fa fa-twitter">
         <img src={Twitter} alt="fb" height="35px" width="35px" /></i></a>

{/* instagram */}
        <a href="https://www.facebook.com/pages/category/Business-service/Kandurata-windscreen-House-111195830315883/"><i class="fa fa-instagram">
        <img src={Instagram} alt="fb" height="35px" width="35px" /></i></a>

{/* linkedin */}
        <a href="https://www.facebook.com/pages/category/Business-service/Kandurata-windscreen-House-111195830315883/"><i class="fa fa-linkedin">
        <img src={Link} alt="fb" height="35px" width="35px" /></i></a>

{/* youtube */}
        <a href="https://www.facebook.com/pages/category/Business-service/Kandurata-windscreen-House-111195830315883/"><i class="fa fa-youtube">
        <img src={Youtube} alt="fb" height="35px" width="35px" /></i></a> 
    </div>
</div>
</footer>
        </div>
    </div>
  )
}
