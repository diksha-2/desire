import React from 'react';
import './footer.css';
// import { Footer } from 'react-bootstrap'


class Footer extends React.Component{

    render()
    {
        return(
            <div>
<div className="footer">
      <hr className="footer-seperator" />
      
      <div className="footer-info">
        <div className="footer-info-left">
          <div className="footer-info__name">
            <span class="footer-copyright">© 2020  Desire Home </span>
          </div>
         </div>
       
        <div className="footer-info-right">
         
          <div className="footer-social-media">
              <ul className="footer-icon m-0">
                  <li>
                    <a className="footer-link" href=""><i className="fab fa-facebook"></i> </a>
                  </li>
                  <li>
                    <a className="footer-link" href=""><i className="fab fa-twitter"></i> </a>
                  </li>
                  <li>
                    <a className="footer-link" href=""><i className="fab fa-instagram"></i> </a>
                  </li>
                  <li>
                    <a className="footer-link" href=""><i className="fab fa-linkedin"></i> </a>
                  </li>
                  <li>
                    <a className="footer-link" href=""><i className="fab fa-pinterest-p"></i> </a>
                  </li>
              </ul>
            
            </div>
        </div>
      </div>
      <hr className="footer-seperator" />
    </div>
            </div>
        )
    }
}
export default Footer;
