import React, {useEffect, useState} from 'react'
import './profile.scss'
import Sidebar from '../Sidebar/Sidebar'
import Popup from '../popups/Popup'
import axios from "axios";
import '../Explore/Explore.scss'
import MiniPopup from "../popups/following";
import Followers from "../popups/followers";


function App() {

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [goToR, isgoToR] = useState(false)
    const [minipopup, isminipopup] = useState(false)
    const [followespopup, isfollowerspopup] = useState(false)
    const [count, setCount] = useState(0)
    const [post, setPost] = React.useState([]);


    function ChangePopup() {
        isgoToR(false)
        document.body.style.overflowY = 'scroll'
    }


    function ChangeMiniPopup() {
        isminipopup(false)
        document.body.style.overflowY = 'scroll'
    }

    function ChangeFolllowersPopup() {
        isfollowerspopup(false)
        document.body.style.overflowY = 'scroll'
    }


    useEffect(() => {
        axios.get('http://localhost:5000/ownposts').then((response) => {
            setPost(response.data);
        });
    }, [])


    return (
        <div className='profile__wrap wrapper'>
            <Sidebar/>
            <div className="profile__content content">
                <div className="profile__info">
                    <input style={{display: 'none'}} type="file" id="uploadprofileimage"/>
                    <label htmlFor="uploadprofileimage" className="user__active__with__stories">
                        <img className='profile__image' src="../images/profileImage.jpg" alt=""/>
                    </label>
                    <div className='profile__setting__and__follows'>
                        <div className="profile__usernames">
                            <h3 className='light'>muhammadrizo20.04</h3>
                            <button className='light'>Редактировать профиль</button>
                            <img src="../images/profile/settings.png" alt=""/>
                        </div>
                        <div className="profile__followings">
                            <div className="profile__pubs">
                                <p><span>2</span> публикаций</p>
                            </div>
                            <div className="profile__pubs" onClick={()=> isfollowerspopup(true)}>
                                <p><span>66</span> подписчиков</p>
                            </div>
                            <div className="profile__pubs" onClick={()=> isminipopup(true)}>
                                <p><span>48</span> подписок</p>
                            </div>
                        </div>
                        <div className="profile__name">
                            <p className='light'>Muhammadrizo</p>
                        </div>
                    </div>
                </div>
                <div className="addactual__wrap">
                    <div className="profile__add__actual">
                        <img src="../images/profile/add.png" alt=""/>
                    </div>
                    <p>Добавить</p>
                </div>

                {minipopup && <MiniPopup ChangeMiniPopup={ChangeMiniPopup} />}
                {followespopup && <Followers ChangeFolllowersPopup={ChangeFolllowersPopup} />}

                <div className="pubs">
                    
                    {/*NAVBAR*/}
                    {/*<div className="pubs__navbar">*/}
                    {/*    <ul>*/}
                    {/*        <li className='activenav'>*/}
                    {/*            <svg aria-label="" className="_ab6-" color="#fafafa" fill="#fafafa" height="12"*/}
                    {/*                 role="img" viewBox="0 0 24 24" width="12">*/}
                    {/*                <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round"*/}
                    {/*                      strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect>*/}
                    {/*                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                      strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>*/}
                    {/*                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                      strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>*/}
                    {/*                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                      strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>*/}
                    {/*                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                      strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>*/}
                    {/*            </svg>*/}
                    {/*            <p>ПУБЛИКАЦИИ</p>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <svg aria-label="" className="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12"*/}
                    {/*                 role="img" viewBox="0 0 24 24" width="12">*/}
                    {/*                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"*/}
                    {/*                         stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                         strokeWidth="2"></polygon>*/}
                    {/*            </svg>*/}
                    {/*            <p>СОХРАНЕННОЕ</p>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <svg aria-label="" className="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12"*/}
                    {/*                 role="img" viewBox="0 0 24 24" width="12">*/}
                    {/*                <path*/}
                    {/*                    d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"*/}
                    {/*                    fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                    strokeWidth="2"></path>*/}
                    {/*                <path*/}
                    {/*                    d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"*/}
                    {/*                    fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                    strokeWidth="2"></path>*/}
                    {/*                <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor"*/}
                    {/*                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>*/}
                    {/*            </svg>*/}
                    {/*            <p>ОТМЕТКИ</p>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    <div className="pubs__posts explore__wrapper__left">
                        {goToR && <Popup postimage={show2} ChangePopup={ChangePopup}/>}
                        {post.map((posts: any, i) => (
                            <div className="gellery__item__wrap" key={i}>
                                <div className='gellery__item' onClick={() => {
                                    isgoToR(true)
                                    setShow2(posts)
                                }}>
                                    {/* Photo */}
                                    <img className='post' src={posts.url} alt=""/>
                                    {/* Photo likes and coments */}
                                    <div className="gallery-item-info">
                                        <ul>
                                            <li className="gallery-item-likes">
                                                <img src="../images/explore/heart.png" alt=""/>
                                                {posts.how__many__licked}
                                            </li>
                                            <li className="gallery-item-comments">
                                                <img src="../images/explore/chat.png" alt=""/>
                                                {posts.comments.length}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* What is this photo video or photo */}
                                    <div className="gallery-item-type">
                                <span className="visually-hidden">
                                    <img src="../images/explore/photo.png" alt=""/>
                                </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/*<div className='gellery__item'>*/}
                        {/*    /!* Photo *!/*/}
                        {/*    <img className='post' src="../images/profile/1.jpg" alt="" />*/}
                        {/*    /!* Photo likes and coments *!/*/}
                        {/*    <div className="gallery-item-info">*/}
                        {/*        <ul>*/}
                        {/*            <li className="gallery-item-likes">*/}
                        {/*                <img src="../images/explore/heart.png" alt="" />*/}
                        {/*                56*/}
                        {/*            </li>*/}
                        {/*            <li className="gallery-item-comments">*/}
                        {/*                <img src="../images/explore/chat.png" alt="" />*/}
                        {/*                2*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*    /!* What is this photo video or photo *!/*/}
                        {/*    <div className="gallery-item-type">*/}
                        {/*        <span className="visually-hidden">*/}
                        {/*            <img src="../images/explore/photo.png" alt="" />*/}
                        {/*        </span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
