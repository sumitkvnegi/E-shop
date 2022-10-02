import React from 'react'
import './Header.css';
import { RiLoginCircleFill } from 'react-icons/ri';
import { NavLink } from "react-router-dom";
import Search from '../../Product/Search';
import { useSelector } from 'react-redux';



const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <div>
            <nav className="navBar">
                <div className="logo">Access</div>
                <ul>
                    <NavLink className="link" to="/">Home</NavLink>
                    <NavLink className="link" to="/products">Products</NavLink>
                    <NavLink className="link" to="/Cart">Cart
                        {(cartItems.length === 0) ? "" : <div className='items'></div>}
                    </NavLink>
                    <NavLink className="link" to="/about">About</NavLink>
                    <NavLink className="link" to="/login"><RiLoginCircleFill className="login" /></NavLink>
                </ul>
            </nav>
            <ul>
                <Search />
            </ul>
        </div>
    )
}

export default Header


// import { NavLink } from "react-router-dom";

            // {/* <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
            // <NavLink exact activeClassName="active_class" to="/">Products</NavLink>
            // <NavLink exact activeClassName="active_class" to="/">Contact</NavLink>
            // <NavLink exact activeClassName="active_class" to="/">About</NavLink> */}