import React from 'react';
import './../styles/header-footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="Footer">
      <div className="footer">
		    <div className="footer-container">
		        <div className="icon-container"> 
		            <p> <a href="https://twitter.com/mrland99" className="footer-link"><FontAwesomeIcon icon={faTwitter}/></a>&nbsp;&nbsp;&nbsp; 
                    <a href="https://github.com/mrland99" className="footer-link"><FontAwesomeIcon icon={faGithub}/></a> </p> 
		        </div>
		        <div className="text-container">
		            <p>&copy; Max Land 2021.</p>
		        </div>
		    </div>
		</div>
    </div>
  );
}

export default Footer;
