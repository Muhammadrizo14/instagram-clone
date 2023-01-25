import './register.scss'
import {Link, redirect, Navigate} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [usernameValid, SetUsernameValid] = useState(false)
    const [userSurNameValid, SetUserSurNameValid] = useState(false)
    const [passwordValid, SetPasswordValid] = useState(false)
    const [nameValid, SetNameValid] = useState(false)
    const [phoneValid, SetPhoneValid] = useState(false)
    const [redirectLogin, SetredirectLogin] = useState(false)


    const [usernameValidValue, SetUsernameValidValue] = useState('')
    const [userSurNameValidValue, SetUserSurNameValidValue] = useState('')
    const [passwordValidValue, SetPasswordValidValue] = useState('')
    const [nameValidValue, SetNameValidValue] = useState('')
    const [phoneValidValue, SetPhoneValidValue] = useState('')


    const [formValid, SetFormValid] = useState(false)


    function IsValidPassword(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 6) {
            SetPasswordValid(true)
            SetPasswordValidValue(e.currentTarget.value)
        }
    }

    function IsValidUsername(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetUsernameValid(false)
            SetUsernameValidValue(e.currentTarget.value)
        }
    }

    function IsValidName(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetNameValid(false)
            SetNameValidValue(e.currentTarget.value)
        }
    }

    function IsValidSurName(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetUserSurNameValid(false)
            SetUserSurNameValidValue(e.currentTarget.value)

        }
    }

    function IsValidPhone(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetPhoneValid(false)
            SetPhoneValidValue(e.currentTarget.value)

        }
    }


    const RegsiterUser = () => {
        const postData = {
            username: usernameValidValue,
            name: userSurNameValidValue,
            surname: passwordValidValue,
            email: nameValidValue,
            password: phoneValidValue
        };

        axios.post(`http://127.0.0.1:8000/api/register/`, postData)
            .then(res => {
                console.log(res)
                SetredirectLogin(true)
            })
            .catch(err => {
                console.log(postData)
                console.log(err)
                redirect("/login")
            })


    }

    async function Registeruser(e: React.FormEvent) {
        e.preventDefault()
        RegsiterUser()
        redirect("/login")
    }

    useEffect(() => {
        if (usernameValid || passwordValid || phoneValid || nameValid || userSurNameValid) {
            SetFormValid(true)
        } else {
            SetFormValid(false)
        }
    }, [passwordValid, usernameValid, nameValid, userSurNameValid, phoneValid])


    return (
        <div className="registration__system">
            {redirectLogin && <Navigate replace to="/login"/>}
            <div className="registration__system__login">
                <Link to="/">
                    <img src="../images/instagramblacklogo.png" alt=""/>
                </Link>
                <p className="signsubtitle">
                    Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
                </p>
                <form onSubmit={(e) => Registeruser(e)}>
                    <input
                        type="text"
                        className="w258"
                        onChange={(e) => IsValidUsername(e)}
                        placeholder="Имя пользователя"
                    />
                    <input
                        type="text"
                        className="w258"
                        onChange={(e) => IsValidName(e)}
                        placeholder="Имя"
                    />
                    <input
                        type="text"
                        className="w258"
                        onChange={(e) => IsValidSurName(e)}
                        placeholder="Фамилия"
                    />
                    <input
                        className="w258"
                        onChange={(e) => IsValidPhone(e)}
                        type="text"
                        placeholder="эл. адрес"
                    />
                    <input
                        type="password"
                        className="w258"
                        onChange={(e) => IsValidPassword(e)}
                        placeholder="Пароль"
                    />
                    <p className="registration__human">
                        Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram.
                        <a href="/">Подробнее</a>
                    </p>
                    <p className="registration__human">
                        Регистрируясь, вы принимаете наши
                        <a href="/">Условия</a>,
                        <a href="/">Политику конфиденциальности</a> и <a href="/">Политику в отношении файлов cookie</a>.
                    </p>
                    <button
                        className="w258"
                        style={formValid ? {opacity: "1", cursor: "pointer"} : {opacity: ".7"}}
                        disabled={!formValid}
                    >
                        Регистрация
                    </button>
                </form>
            </div>
            <div className="registration__system__orregister">
                <span>
                    Есть аккаунт? <a href="/login">Вход</a>
                </span>
            </div>
        </div>
    )
}


export default App