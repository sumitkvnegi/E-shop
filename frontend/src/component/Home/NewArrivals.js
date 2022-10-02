import React from 'react';
import bannerimg from "../../images/banner_img.png";

const NewArrivals = () => {
    return (

        <div className="new_arrivals">
            <div className="arrival_img">
                <img src={bannerimg} alt="banner_img" />
            </div>
            <div className="arrival_info">
                <h2>#New Arrivals</h2>
                <p>
                    variations of passages of Lorem Ipsum available, variations of
                    passages of Lorem Ipsum available
                </p>
                <button className="shop_now">Shop Now</button>
            </div>
        </div>
    )
}

export default NewArrivals