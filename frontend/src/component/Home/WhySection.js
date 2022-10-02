import React from 'react';
import { FaTruck, FaAward } from 'react-icons/fa';
import { GiJumpingRope } from 'react-icons/gi';

const WhySection = () => {
    return (
        <div>
            {/* Why Section  */}
            <div className="why_section">
                <h2 className="heads">
                    Why Shop With Us
                </h2>
                <div>
                    <div className="box">
                        <FaTruck className="icon" />
                        <h3>Fast Delivery</h3>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                    <div className="box">
                        <GiJumpingRope className="icon" />
                        <h3>Free Shiping</h3>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                    <div className="box">
                        <FaAward className="icon" />
                        <h3>Best Quality</h3>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                </div>
            </div>
            {/* End Why Section  */}
        </div>
    )
}

export default WhySection