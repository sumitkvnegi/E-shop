import React, { Fragment, useCallback, useMemo, useRef, useState, useEffect } from 'react';
import "./LoginSignUp.css";
import Loader from '../layout/Loader/Loader';
import { MdOutlineAlternateEmail, MdFace } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Carousel from "react-material-ui-carousel";
import a from "../../images/a.png";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login, register } from '../../actions/userAction';
import { useAlert } from 'react-alert';
import { useNavigate, useLocation } from 'react-router-dom'

const LoginSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const alert = useAlert();
    const { error, loading, isAuthenticated } = useSelector(state => state.user);

    const [activeChild, setActiveChild] = useState(0);
    const items = useMemo(() => [a, a, a, a], []);

    const changeChild = useCallback((e = KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            setActiveChild((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
        } else if (e.key === "ArrowRight") {
            setActiveChild((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
        }
    }, [items]);
    useEffect(() => {
        document.addEventListener("keydown", changeChild);

        return () => {
            document.removeEventListener("keydown", changeChild)
        }
    });


    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("avatar", avatar);
        dispatch(register(myForm))
    }

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    const redirect = location.search ? location.search.split("=")[1] : "/account";

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            navigate(redirect);
        }
    }, [dispatch, error, alert, isAuthenticated, navigate, redirect]);

    const switchTabs = (e, tab) => {
        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }
    }
    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <div className="LoginSignUpContainer">
                        <div className="leftPermote">
                            <Carousel
                                index={activeChild}
                                autoPlay={false}
                                navButtonsAlwaysInvisible>
                                {items.map((i) => {
                                    return (
                                        <img
                                            className="CarouselImage"
                                            key={i}
                                            src={i}
                                            alt={i}
                                        />
                                    )
                                })}
                            </Carousel>
                            <p>Access The New Era</p>
                            <h2>Festive Discount On </h2>
                            <h2>Electronics</h2>
                        </div>
                        <div className="rightForm">
                            <div className="LoginSignUpBox">
                                <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                                    <div className="loginHead">
                                        <h1>Hello Again!</h1>
                                        <p>Welcome Back You've Been Missed!</p>
                                    </div>
                                    <div className="loginEmail">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                        />
                                        <MdOutlineAlternateEmail />
                                    </div>
                                    <div className="loginPassword">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                        />
                                        <AiOutlineLock />
                                    </div>
                                    <Link to="/password/forgot">Forget Password?</Link>
                                    <input type="submit" value="Login" className="loginBtn" />
                                    <div>
                                        <div className="LoginSignUpToggle">
                                            <p className="regbtn" onClick={(e) => switchTabs(e, "register")}><span>Don't Have An Account Yet? </span><b>Register Now</b></p>
                                        </div>
                                        <button ref={switcherTab}></button>
                                    </div>
                                </form>
                                <form className="signUpForm"
                                    ref={registerTab}
                                    encType="multipart/form-data"
                                    onSubmit={registerSubmit}>
                                    <div className="loginHead">
                                        <h1>Hello Stranger!</h1>
                                        <p>Fill The Personal Details Carefully!</p>
                                    </div>
                                    <div className="signUpEmail">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            required
                                            name="name"
                                            value={name}
                                            onChange={registerDataChange}
                                        />
                                        <MdFace />
                                    </div>
                                    <div className="signUpEmail">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            name="email"
                                            value={email}
                                            onChange={registerDataChange}
                                        />
                                        <MdOutlineAlternateEmail />
                                    </div>
                                    <div className="signUpPassword">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            name="password"
                                            value={password}
                                            onChange={registerDataChange}
                                        />
                                        <AiOutlineLock />
                                    </div>
                                    <div id="registerImage">
                                        <input
                                            type="file"
                                            name="avatar"
                                            accept="image/*"
                                            onChange={registerDataChange}
                                        />
                                        <img src={avatarPreview} alt="Avatar Preview" />
                                    </div>
                                    <input type="submit" value="Register" className="signUpBtn"
                                    />
                                    <div>
                                        <div className="LoginSignUpToggle">
                                            <p className="logbtn" onClick={(e) => switchTabs(e, "login")}><span>Already Registered?</span><b>Login Now</b></p>
                                        </div>
                                        <button ref={switcherTab}></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Fragment>}
        </Fragment>
    )
}

export default LoginSignUp

// <FaUserCircle/> <MdFace /> disabled={loading?true:false}