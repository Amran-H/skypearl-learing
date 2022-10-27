import React from 'react';
import './Footer.css'
import { FaFacebook, FaLinkedin, FaLocationArrow, FaPhone, FaRoad, FaTwitter, FaUserTie, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="main-footer mt-5">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h3 className='text-info'>SkyPearl-Learning</h3>
                        <ui className="list-unstyled">
                            <li><FaPhone></FaPhone> +88 01824 516488</li>
                            <li><FaLocationArrow></FaLocationArrow> Dhaka, Bangladesh</li>
                            <li><FaRoad></FaRoad> 123 Street South North</li>
                        </ui>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4 className='text-info'>Stuff</h4>
                        <ui className="list-unstyled">
                            <li><FaUserTie></FaUserTie> AMRAN HOSSAIN</li>
                            <li><FaUserTie></FaUserTie> SHARMIN AKTER</li>
                            <li><FaUserTie></FaUserTie> AMRIN HOSSAIN</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4 className='text-info'>Contact Us</h4>
                        <ui className="list-unstyled">
                            <li><FaFacebook></FaFacebook> Facebook</li>
                            <li><FaWhatsapp></FaWhatsapp> WhatsApp</li>
                            <li><FaTwitter></FaTwitter> Twitter</li>
                            <li><FaLinkedin></FaLinkedin> LinkedIn</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} SkyPearl_Learning | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;