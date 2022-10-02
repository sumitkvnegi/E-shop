import React from "react";
import "./Footer.css";
import { GiReturnArrow } from 'react-icons/gi'
import { BiAtom } from 'react-icons/bi'
import { FaShippingFast } from 'react-icons/fa'
import { BsInstagram, BsGithub, BsDribbble, BsTwitter } from 'react-icons/bs'



const Footer = () => {
    const tag1 = String.raw`Now you can shop for 
it and enjoy a good deal 
on access.`;
    const tag2 = String.raw`When returning the items, 
we doa refund of the order, 
if you wish to exchange for 
another item or color.`;
    const tag3 = String.raw`We use the best quality metarial 
in our product. You can find the
best quality product in our shop.`;
    const tag4 = String.raw`PRIVACY POLICY 
TERMS & CONDITIONS`;
    return (
        <footer className="footerwrapper">
            <div className="footer">
                <div className="footer_info">
                    <div className="testi">

                        <div>
                            <h2><GiReturnArrow className="icon_footer" /> Free Shipping</h2>
                            <pre>{tag1}</pre>
                        </div>

                    </div>
                    <div className="testi">
                        <div>
                            <h2><BiAtom className="icon_footer" /> 30 Day Return</h2>

                            <pre>{tag2}</pre>

                        </div>

                    </div>
                    <div className="testi">
                        <div>
                            <h2><FaShippingFast className="icon_footer" /> Best Quality</h2>

                            <pre>{tag3}</pre>

                        </div>

                    </div>
                </div>
                <div className="footer_info2">
                    <div>
                        <div>
                            <div className="socials2">
                                <h1>Follow Us</h1>
                            </div>
                            <div className="socials">
                                <a href="www.google.com">
                                    <BsTwitter />
                                </a>
                                <a href="www.google.com">
                                    <BsInstagram />
                                </a>
                                <a href="www.google.com">
                                    <BsGithub />
                                </a>
                                <a href="www.google.com">
                                    <BsDribbble />
                                </a>
                            </div>
                        </div>
                        <div className="testi testispace">
                            <div>
                                <h2>Useful Links</h2>
                                <pre>{tag4}</pre>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="footerBottom">
                    <p>
                        @{new Date().getFullYear()} Access. All Rights Reserved
                    </p>
                </div>
            </div>
            <div className="footer_bg"></div>
        </footer>
    );
};

export default Footer;
