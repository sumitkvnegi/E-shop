import React, { Fragment, useEffect, Suspense } from "react";
import Loader from "../layout/Loader/Loader";
import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

const BannerSection = React.lazy(() => import("./BannerSection"));
const WhySection = React.lazy(() => import("./WhySection"));
const NewArrivals = React.lazy(() => import("./NewArrivals"));
const Footer = React.lazy(() => import("../layout/Footer/Footer"));

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="Access" />
                    <div className="container">
                        <Suspense fallback={<div><Loader /></div>}>
                            <BannerSection />
                        </Suspense>
                        <Suspense fallback={<div><Loader /></div>}>
                            <WhySection />
                        </Suspense>
                        <Suspense fallback={<div><Loader /></div>}>
                            <NewArrivals />
                        </Suspense>
                        <h1 className="heads" id="products">
                            Featured <span>Product</span>{" "}
                        </h1>

                        {/* Product Section */}
                        <div className="products">
                            {products &&
                                products.map((product) => (
                                    <Product key={product._id} product={product} />
                                ))}
                        </div>
                        {/* End Product Section */}

                        <Suspense fallback={<div><Loader /></div>}>
                            <Footer />
                        </Suspense>

                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;
