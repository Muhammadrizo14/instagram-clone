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
    const [nameValidValue, SetNameValidValue] = useState('')
    const [userSurNameValidValue, SetUserSurNameValidValue] = useState('')
    const [emailValidValue, SetEmailValidValue] = useState('')
    const [passwordValidValue, SetPasswordValidValue] = useState('')


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

    function IsValidEmail(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetPhoneValid(false)
            SetEmailValidValue(e.currentTarget.value)
        }
    }


    const RegsiterUser = () => {
        interface iPostData {
            username: string
            name: string
            surname: string
            email: string
            password: string
        }

        const postData: iPostData = {
            username: usernameValidValue,
            name: nameValidValue,
            surname: userSurNameValidValue,
            email: emailValidValue,
            password: passwordValidValue,
        };


        axios.post(`http://127.0.0.1:8000/api/register/`, postData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => {
                console.log(res)
                console.log(postData)
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
                    ??????????????????????????????????, ?????????? ???????????????? ???????? ?? ?????????? ?????????? ????????????.
                </p>
                <form onSubmit={(e) => Registeruser(e)}>
                    <input
                        type="text"
                        className="w258"
                        onChange={(e) => IsValidUsername(e)}
                        placeholder="?????? ????????????????????????"
                    />
                    <input
                        type="text"
                        className="w258"
                        onChange={(e) => IsValidName(e)}
                        placeholder="??????"
                    />
                    <input
                        type="text"
                        className="w258"
                        onChange={(e) => IsValidSurName(e)}
                        placeholder="??????????????"
                    />
                    <input
                        className="w258"
                        onChange={(e) => IsValidEmail(e)}
                        type="text"
                        placeholder="????. ??????????"
                    />
                    <input
                        type="password"
                        className="w258"
                        onChange={(e) => IsValidPassword(e)}
                        placeholder="????????????"
                    />
                    <p className="registration__human">
                        ????????, ?????????????? ???????????????????? ?????????? ????????????????, ?????????? ?????????????????? ???????? ???????????????????? ???????????????????? ?? Instagram.
                        <a href="/">??????????????????</a>
                    </p>
                    <p className="registration__human">
                        ??????????????????????????, ???? ???????????????????? ????????
                        <a href="/">??????????????</a>,
                        <a href="/">???????????????? ????????????????????????????????????</a> ?? <a href="/">???????????????? ?? ?????????????????? ???????????? cookie</a>.
                    </p>
                    <button
                        className="w258"
                        style={formValid ? {opacity: "1", cursor: "pointer"} : {opacity: ".7"}}
                        disabled={!formValid}
                    >
                        ??????????????????????
                    </button>
                </form>
            </div>
            <div className="registration__system__orregister">
                <span>
                    ???????? ??????????????? <a href="/login">????????</a>
                </span>
            </div>
        </div>
    )
}


export default App