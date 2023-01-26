import './login.scss'
import {Link, Navigate, redirect} from 'react-router-dom'
import React, {FormEvent, useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [usernameValid, SetUsernameValid] = useState(false)
    const [passwordValid, SetPasswordValid] = useState(false)
    const [usernameValue, SetUsernameValue] = useState('')
    const [passwordValue, SetPasswordValue] = useState('')
    const [formValid, SetFormValid] = useState(false)

    const [redirectHome, SetRedirectHome] = useState(false)


    function IsValidPassword(e: React.FormEvent<HTMLInputElement>) {
        // if (e.currentTarget.value.length > 6) {
            SetPasswordValid(true)
            SetPasswordValue(e.currentTarget.value)
        // }
    }

    const LoginUser = (e: FormEvent) => {
        e.preventDefault()
        const postData = {
            username: usernameValue,
            password: passwordValue
        };

        axios.post(`http://127.0.0.1:8000/api/login/`, postData)
            .then(res => {
                console.log(res)
                SetRedirectHome(true)
            })
            .catch(err => {
                console.log(postData)
                console.log(err)
            })
    }

    function IsValidUsername(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetUsernameValid(false)
            SetUsernameValue(e.currentTarget.value)
        }
    }

    useEffect(() => {
        if (usernameValid || passwordValid) {
            SetFormValid(true)
        } else {
            SetFormValid(false)
        }
    }, [passwordValid, usernameValid])


    return (
        <div className="registration__system">
            {redirectHome && <Navigate replace to="/"/>}
            <div className="registration__system__login">
                <Link to="/">
                    <img src="../images/instagramblacklogo.png" alt=""/>
                </Link>
                <form onSubmit={(e) => LoginUser(e)}>
                    <input
                        onChange={
                            (e) => {
                                IsValidUsername(e)
                            }
                        }
                        type="text"
                        placeholder="Имя пользователя"
                    />
                    <input type="password" onChange={(e) => IsValidPassword(e)} placeholder="Пароль"/>
                    <button style={formValid ? {opacity: "1", cursor: "pointer"} : {opacity: ".7"}}
                            disabled={!formValid}>Войти
                    </button>
                </form>
                <div className="registration__system__login__otheror">
                    <div className="otheror__line"></div>
                    <p>или</p>
                    <div className="otheror__line"></div>
                </div>
                <div className="registration__system__login__endpassword">
                    <a href="/">Забыли пароль?</a>
                </div>
            </div>
            <div className="registration__system__orregister">
                <span>
                    У вас ещё нет аккаунта?
                    <a href="/signup"> Зарегистрироваться</a>
                </span>
            </div>
        </div>
    )
}


export default App