import './App.css';
import Header from "./component/layout/Header/Header"
import Home from "./component/Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import WebFont from "webfontloader";
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Error from './component/Error/Error';
import LoginSignUp from './component/User/LoginSignUp';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions';
import Profile from './component/User/Profile';
import { useSelector } from 'react-redux';
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import About from './component/Home/About.js';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import axios from 'axios';
import Payment from './component/Cart/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import DashBoard from './component/Admin/DashBoard';
import ProductList from './component/Admin/ProductList';
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UsersList from './component/Admin/UsersList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';

function App() {
    const { isAuthenticated, user } = useSelector(state => state.user);
    const [stripeApiKey, setStripeApiKey] = useState("");
    async function getStripeApiKey() {
        const { data } = await axios.get("/api/v1/stripeapikey");
        setStripeApiKey(data.stripeApiKey);
    }
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Poppins', 'Handlee', 'Satisfy', 'Moon Dance']
            }
        });

        store.dispatch(loadUser());

        getStripeApiKey();
    }, []);

    // window.addEventListener("contextmenu", (e) => e.preventDefault());

    return (
        <Router>
            <Header />
            {isAuthenticated && <UserOptions user={user} />}
            {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                    <Routes>
                        <Route element={<ProtectedRoute />}>
                            <Route path="/process/payment" element={<Payment />} />
                        </Route>
                    </Routes>
                </Elements>
            )}
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/account" element={<Profile />} />
                    <Route path="/me/update" element={<UpdateProfile />} />
                    <Route path="/password/update" element={<UpdatePassword />} />
                    <Route path="/login/shipping" element={<Shipping />} />
                    <Route path="/order/confirm" element={<ConfirmOrder />} />
                    <Route path="/success" element={<OrderSuccess />} />
                    <Route path="/orders" element={<MyOrders />} />
                    <Route path="/order/:id" element={<OrderDetails />} />
                    <Route
                        path="/admin/dashboard" element={<DashBoard />} />
                    <Route path="/admin/products" element={<ProductList />} />
                    <Route path="/admin/product" element={<NewProduct />} />
                    <Route path="/admin/product/:id" element={<UpdateProduct />} />
                    <Route path="/admin/orders" element={<OrderList />} />
                    <Route path="/admin/order/:id" element={<ProcessOrder />} />
                    <Route path="/admin/users" element={<UsersList />} />
                    <Route path="/admin/user/:id" element={<UpdateUser />} />
                    <Route path="/admin/reviews" element={<ProductReviews />} />
                </Route>

                <Route path="/" element={<Home />}></Route>
                <Route path="/product/:id" element={<ProductDetails />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:keyword" element={<Products />}></Route>
                <Route path="/login" element={<LoginSignUp />}></Route>
                <Route path="/password/forgot" element={<ForgotPassword />} />
                <Route path="/password/reset/:token" element={<ResetPassword />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </Router>
    );
}

export default App;