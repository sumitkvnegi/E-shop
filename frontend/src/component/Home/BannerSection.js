import React from 'react'
// import banner from "../../images/banner_img.png";
import { FaArrowAltCircleDown } from "react-icons/fa";

const BannerSection = () => {
    const tag = String.raw`Browse through some of the largest collection of products 
to brighten your day`;
    return (
        <div className="banner">
            <div className="left">
                <h4>The Best Product Shop</h4>
                <p className="title">
                    <span>Creating happiness</span>
                    for your loved ones
                </p>
                <pre className="tag">{tag}</pre>
                <a href="#products">
                    <button>
                        Scroll <FaArrowAltCircleDown />
                    </button>
                </a>
            </div>

            {/* <div className="right">
                <img src={banner} alt="banner_img" />
            </div> */}

            {/* <div className="background"></div> */}
        </div>
    )
}

export default BannerSection