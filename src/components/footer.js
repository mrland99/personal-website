import React from 'react';
import './../styles/header-footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="Footer">
      <div class="footer">
		    <div class="footer-container">
		        <div class="icon-container"> 
		            <p> <a href="https://www.facebook.com/mrland99/" class="footer-link"><FontAwesomeIcon icon={faFacebook}/></a>&nbsp;&nbsp;&nbsp; 
                    <a href="https://www.instagram.com/mrland99/" class="footer-link"><FontAwesomeIcon icon={faInstagram}/></a>&nbsp;&nbsp;&nbsp; 
                    <a href="https://github.com/mrland99" class="footer-link"><FontAwesomeIcon icon={faGithub}/></a> </p> 
		        </div>
		        <div class="text-container">
		            <p>&copy; Max Land 2020.</p>
		        </div>
		    </div>
		</div>
    </div>
  );
}

export default Footer;
