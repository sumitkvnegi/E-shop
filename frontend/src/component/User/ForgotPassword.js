import React, { Fragment, useState, useEffect } from 'react';
import "./ForgotPassword.css";
import Loader from '../layout/Loader/Loader';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, forgotPassword } from '../../actions/userAction';
import { useAlert } from 'react-alert';
import MetaData from '../layout/MetaData';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { error, message, loading } = useSelector(state => state.forgotPassword);

    const [email, setEmail] = useState("");

    const forgotPasswordSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email);;
        dispatch(forgotPassword(myForm))
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message);
        }
    }, [dispatch, error, alert, message]);

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title="Forgot Password" />
                    <div className="forgotPasswordContainer">
                        <div className="forgotPasswordBox">
                            <form className="forgotPasswordForm"
                                onSubmit={forgotPasswordSubmit}>
                                <h2>Forgot Password</h2>

                                <div className="loginEmail">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <MdOutlineAlternateEmail />
                                </div>
                                <input type="submit" value="Send" className="forgotPasswordBtn"
                                />
                            </form>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

export default ForgotPassword