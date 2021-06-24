import React from 'react';
import './Section6_Footer.css'

const Section6_Footer = () => {
    return (
        <section className="footer_area">

            <div className="details_info">

                <div className="location">
                    <div className="map_logo">
                        <img src="" alt="" />
                    </div>
                    <div className="address">
                        <p>H#095 (1st Floor), Road #15</p>
                        <p>Humaion Road, Mohammadpur, Dhaka, Bangladesh</p>
                    </div>
                </div>

                <div className="pages">
                    <h2>Center</h2>
                    <div className="links">
                        <ul>
                            <li>About</li>
                            <li>Products</li>
                            <li>Our Team</li>
                            <li>Terms Conditions</li>
                            <li>Submit Listing</li>
                        </ul>
                    </div>
                </div>

                <div className="pages">
                    <h2>Quick Links</h2>
                    <div className="links">
                        <ul>
                            <li>Quick Links</li>
                            <li>Service</li>
                            <li>Sales</li>
                            <li>Contact</li>
                            <li>Our Blog</li>
                        </ul>
                    </div>
                </div>

                <div className="about_us">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas totam dolorem iste,
            libero consectetur.</p>

                    <div className="social_icons">
                        <img src="" alt="" />

                    </div>
                </div>

            </div>

            <div className="copyright">
                <p>Copyright Persona | 2021</p>
            </div>


        </section>
    );
};

export default Section6_Footer;