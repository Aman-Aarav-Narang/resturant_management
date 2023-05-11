import React, { useState } from 'react'
import Header from './Header'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const Loginpanel = () => {


    const [userdata, setData] = useState({
        name: "",
        password: ""
    })

    const navigate = useNavigate();
    const match = () => {


        let name = userdata.name;
        let password = userdata.password;
        if (name === "admin" && password === "admin12345") {

            toast.success("Welcome to the panel", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
            setTimeout(() => {
                navigate("/adminpanel");
            }, 2000)


        }
        else {
            toast.error("Incorrect username and password", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        }

    }
    const getdata = (e) => {
        setData({ ...userdata, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Header />
            <div>
                <div className="limiter">
                    <div className="container-login100 login-bg">
                        <div className="wrap-login100  p-b-20">
                            <span className="login100-form-title p-b-70">
                                Welcome
                            </span>
                            <span className="login100-form-avatar">
                                <img src="logo512.png" alt="AVATAR" />
                            </span>
                            <div className="wrap-input100 validate-input m-b-35" data-validate="Enter username">
                                <input className="input100" type="text" name="name" onChange={getdata} />
                                <span className="focus-input100" data-placeholder="Username" />
                            </div>
                            <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                                <input className="input100" type="password" name="password" onChange={getdata} />
                                <span className="focus-input100" data-placeholder="Password" />
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={match}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dropDownSelect1" />
            </div>

        </>
    )
}

export default Loginpanel
