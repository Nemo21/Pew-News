import React from 'react'
import { articles, broadcasts, contactUs, podcasts } from '../dummyData'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__container">
            <div className="footer__logoSection">
                <div className="footer__logo">
                    PN
                </div>
            </div>

            <div className="footer__linksSection">
                <ul className="footer__links">
                    <li className="footer__linkHead">Articles</li>

                    {
                        articles && articles.map(article => (
                            <li className="footer__link">{article}</li>
                        ))
                    }
                </ul>
                <ul className="footer__links">
                    <li className="footer__linkHead">Podcasts</li>

                    {
                        podcasts && podcasts.map(podcast => (
                            <li className="footer__link">{podcast}</li>
                        ))
                    }
                </ul>
                <ul className="footer__links">
                    <li className="footer__linkHead">Broadcasts</li>
                    {
                        broadcasts && broadcasts.map(broadcast => (
                            <li className="footer__link">{broadcast}</li>
                        ))
                    }
                </ul>
                <ul className="footer__links">
                    <li className="footer__linkHead">Contact Us</li>
                    {
                        contactUs && contactUs.map(contact => (
                            <li className="footer__link">{contact}</li>

                        ))
                    }
    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer