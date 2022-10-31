import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import * as url from "url";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Tilmeld dig vores nyhedsbrev for at få de seneste begivenheder og nyheder
        </p>
        <p className='footer-subscription-text'>
          Du kan framelde dig lige når du har lyst
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <Button buttonStyle='btn--outline'>Tilmeld</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Omkring Us</h2>
            <Link to='/SensimateMetoden'>Sensimate methoden</Link>
            <Link to='/Testimonial'>Testimonial</Link>
            <Link to='/TermsOfService'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Kontakt os</h2>
            <Link to='/'>Kontakt</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Om os</Link>

          </div>
        </div>

          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{pathname: "https://www.instagram.com/sensimate_dk/"}} target="_blank"> Instagram </Link>
            <Link to={{pathname: "https://www.facebook.com/profile.php?id=100075874784093"}} target="_blank">Facebook</Link>

          </div>
        </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Sensimate

            </Link>
          </div>
          <small class='website-rights'>Sensimate © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
