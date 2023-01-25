import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../settings.scss'
import '../../css/minipopup.scss'

function Popup(props) {

    const settings = {
        infinite: false,
        dots: true,
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    return (
        <div className="popup">

            <div className="popupdetailfwpruhwe">

                <div className="modfdfsdafasal-content minipoupModfdfsdafasal-content" style={{zIndex: 9879789789789}}>
                    <div className="modal-content model-content-fooo popup__mini">
                        <div className="following__wrapper">
                            <div className="following__title">
                                <h1>Подписчики</h1>
                                <div onClick={props.ChangeFolllowersPopup}>
                                    <svg aria-label="Закрыть" className="closepopup" color="#ffffff" fill="#ffffff"
                                         height="18"
                                         role="img" viewBox="0 0 24 24" width="18"><title>Закрыть</title>
                                        <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647"
                                                  stroke="currentColor"
                                                  strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="3"></polyline>
                                        <line fill="none" stroke="currentColor" strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
                                    </svg>
                                </div>
                            </div>
                            <div className="followings">
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                                <div className="following">
                                    <div className="following__bio">
                                        <img src="../images/users/1.jpg" alt=""/>
                                        <div className="following__bio__usernames">
                                            <h4>biknaz01</h4>
                                            <p>Abrorbek Nazirov</p>
                                        </div>
                                    </div>
                                    <button>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;