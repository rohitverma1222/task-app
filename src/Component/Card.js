import React from 'react'
import './Style/card.css'
import { useNavigate } from 'react-router-dom';
export default function Card(props) {
    let EmailIcon = "fa-regular fa-envelope";
    let passwordIcon = "fa-solid fa-lock";
    let LoginIcon = "fa-solid fa-right-to-bracket"

    let navigate=useNavigate()
    const handleclick=(e)=>{
        navigate(e)
    }
    return (
        <>
            <div className="login-page">
                <div className="login-box">
                    <div className="left-container">
                        logo
                    </div>
                    <div className="right-container">

                        <p id="hello">Hello,</p>
                        <p id="wel">Welcome</p>
                        <p>{props.status}</p>
                        <form>
                            <div className="user-box">
                                <input className="user-box-input" type="text" required />
                                <label className="user-box-label"><i className={props.input1==="Email"?EmailIcon:passwordIcon}></i> {props.input1}</label>
                            </div>
                            {
                                props.input2===""?"":
                                <div class="user-box">
                                <input className="user-box-input" type="password" required />
                                <label className="user-box-label"><i className={passwordIcon}></i> {props.input2}</label>
                            </div>
                            }
                            {props.LoginMethod === true ?
                                <div className="other-option">
                                    <div className="rem">
                                        <p><input type="checkbox" /> Remember me</p>
                                    </div>
                                    <div className="forget">
                                        <p onClick={()=>handleclick("/forget-password")}><i className={passwordIcon}></i> Forget Password?</p>
                                    </div>
                                </div> : ""
                            }
                            <button className="login-btn" type="submit"><i className={LoginIcon}
                                style={{ color: '#ffffff' }} ></i> {props.btnValue}</button>
                        </form>
                        {
                            props.NewUser === true ? <div className="other-option">
                                <div className="rem">
                                    <p>New to DSDP?</p>
                                </div>
                                <div className="forget">
                                    <button className="create-acc" type="submit"><i className={LoginIcon}
                                        style={{ color: '#555B6C' }}></i> CREATE ACCOUNT</button>
                                </div>
                            </div> : ""
                        }


                        <br /> <br />
                        {
                            props.OtherLoginOption === true ? props.NewUser === true ?
                                <div className="other-option">
                                    <div className="rem">
                                        <p>Sign in with :</p>
                                    </div>
                                    <div className="sign-btn">
                                        <button className="signin-option"><i className="fa-brands fa-google" style={{ color: '#6f7680' }}></i></button>
                                        <button className="signin-option"><i className="fa-brands fa-microsoft" style={{ color: '#5b6576' }}></i></button>
                                    </div>
                                </div> :
                                <div className="other-option">
                                    <div className="rem">
                                        <p onClick={()=>handleclick("/")} style={{ cursor : "pointer"}}><i className={LoginIcon}
                                        style={{ color: '#555B6C'}}></i> Back to Login</p>
                                    </div>
                                </div>
                                : ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
