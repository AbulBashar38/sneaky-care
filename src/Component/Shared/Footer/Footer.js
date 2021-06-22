import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {

    const productInfo = [
        { name: 'Sanitary Napkin', link: '/shop' },
        { name: 'Appointment', link: '/appointment' },
        { name: 'Joya sanitary napkin', link: '/about' },
        { name: 'Freedom sanitary napkin', link: '/about' },
        { name: 'Whisper sanitary napkin', link: '/about' },
        { name: 'Other product', link: '/shop' },
    ];
    const companyInfo = [
        { name: 'About us', link: '/about' },
        { name: 'Get offers', link: '/offer' },
        { name: 'Blogs', link: '/about' },
        { name: 'News', link: '/about' },
        { name: 'Jobs', link: '/contact' },
    ];
    const learnMore = [
        { name: 'Support', link: '/about' },
        { name: 'Developers', link: '/about' },
        { name: 'Offer policy', link: '/offer' },
        { name: 'FAQ', link: '/about' },
    ];

    return (
        <footer className='mt-5 pt-5'>
            <div className="footerContainer py-5">
                <div className="container">
                    <div className="row footer">
                        <FooterCol title='product' footerItems={productInfo}></FooterCol>
                        <FooterCol title='company' footerItems={companyInfo}></FooterCol>
                        <FooterCol title='learn more' footerItems={learnMore}></FooterCol>
                        <FooterCol title='connect with us' footerItems={[]}>
                            <ul className="socialMedia list-inline">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                        </FooterCol>
                    </div>
                    <div className="copyRight text-center text-white">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;