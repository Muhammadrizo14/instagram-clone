import React, {ReactElement, ReactHTML, ReactNode, useEffect, useState} from 'react'
import './Home.scss'
import Sidebar from '../Sidebar/Sidebar'
import {Link} from 'react-router-dom'
import axios from "axios";

function App() {
    const [post, setPost] = useState([]);

    const [saved, setSaved] = useState(false)

    function likePost(e: any) {
        const lickedSvg = "<img className=\"icon__with__padding licked\" src=\"../images/like.png\" alt=\"\"/>"

        const unlickedSvg = "<img className=\"icon__with__padding unlike\" onClick={(e)=> {likePost(e)}} src=\"../images/unlike.png\" alt=\"\"/>"

        let currentLike = e.target
        console.log(typeof e.target)

        // currentLike.remove()

        let parentElement = e.target.parentElement


        let like = parentElement.querySelector('.unlike')

        let unlicked = parentElement.querySelector('.like')

        if (currentLike.className == 'unlike') {
            like.classList.add('display-none')
            unlicked.classList.remove('display-none')
        } else if (currentLike.className == 'like') {
            like.classList.remove('display-none')
            unlicked.classList.add('display-none')
        }


    }


    useEffect(() => {
        axios.get('http://localhost:5000/following__posts').then((response) => {
            setPost(response.data);
            setTimeout(() => {
                let postImages = document.querySelectorAll('.posts__image')


                postImages.forEach(postImage => {
                    postImage.addEventListener('dblclick', (e: any) => {
                        // console.log('clicked')
                        // console.log(e.path)

                        let parentElement = e.path[1]
                        let currentLikeWrap = parentElement.querySelector('.posts__option > .post__like__coment__send > .svgButton ')
                        let LikeBtn = currentLikeWrap.querySelector('.like')
                        let unLikeBtn = currentLikeWrap.querySelector('.unlike')


                        if (LikeBtn.className == 'display-none like') {
                            LikeBtn.classList.remove('display-none')
                            unLikeBtn.classList.add('display-none')
                        }
                    })
                })


            }, 50)
        });
    }, [])


    useEffect(() => {

    }, [])


    return (
        <div className='home__wrap wrapper'>
            <Sidebar/>
            <div className="home__content ">
                <div className="posts__and__stories__wrap">
                    <div className="posts__and__storis">
                        <div className="user user__active__with__stories">
                            <img src="../images/users/1.jpg" alt=""/>
                            <p>Ayubkhan</p>
                        </div>
                        <div className="user">
                            <img src="../images/users/2.jpg" alt=""/>
                            <p>Ayubkhan</p>
                        </div>
                        <div className="user">
                            <img src="../images/users/3.jpg" alt=""/>
                            <p>Ayubkhan</p>
                        </div>
                        <div className="user">
                            <img src="../images/users/4.jpg" alt=""/>
                            <p>Ayubkhan</p>
                        </div>
                        <div className="user">
                            <img src="../images/users/5.jpg" alt=""/>
                            <p>Ayubkhan</p>
                        </div>
                    </div>

                    {/*POOOSTS*/}
                    <div className="posts">
                        {post.map((posts: any, i) => (
                            <div key={i} className="post">
                                <div className="user which__user__this__post">
                                    <Link to="/profile">
                                        <div className='which__user__this__post__info'>
                                            <img src={posts.userminilogo} alt=""/>
                                            <p>{posts.createdby}</p>
                                        </div>
                                    </Link>

                                    <div className="icon__with__padding">
                                        <svg aria-label="Дополнительно" color="#fafafa" fill="#fafafa" height="24"
                                             role="img" viewBox="0 0 24 24" width="24">
                                            <circle cx="12" cy="12" r="1.5"></circle>
                                            <circle cx="6" cy="12" r="1.5"></circle>
                                            <circle cx="18" cy="12" r="1.5"></circle>
                                        </svg>
                                    </div>
                                </div>
                                <div className="posts__image" style={{
                                    backgroundImage: `url(${posts.url})`,
                                    width: "100%",
                                    height: "590px",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}>
                                </div>
                                <div className="posts__option">
                                    <div className='post__like__coment__send'>
                                        <div className="svgButton icon__with__padding">
                                            <img className="unlike" src="../images/unlike.png" alt="" onClick={(e) => {
                                                likePost(e)
                                            }}/>
                                            <img className="display-none like" src="../images/like.png" alt=""
                                                 onClick={(e) => {
                                                     likePost(e)
                                                 }}/>
                                        </div>
                                        <div className='icon__with__padding'>
                                            <svg aria-label="Комментировать" color="#fafafa" fill="#fafafa" height="24"
                                                 role="img" viewBox="0 0 24 24" width="24">
                                                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none"
                                                      stroke="currentColor" strokeLinejoin="round"
                                                      strokeWidth="2"></path>
                                            </svg>
                                        </div>
                                        <div className='icon__with__padding'>
                                            <svg aria-label="Поделиться публикацией" color="#fafafa" fill="#fafafa"
                                                 height="24" role="img" viewBox="0 0 24 24" width="24">
                                                <line fill="none" stroke="currentColor" strokeLinejoin="round"
                                                      strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                                <polygon fill="none"
                                                         points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                                         stroke="currentColor" strokeLinejoin="round"
                                                         strokeWidth="2"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='icon__with__padding post__save' onClick={() => setSaved(!saved)}>
                                        {saved ?
                                            <svg aria-label="Удалить" className="_ab6-" color="#fafafa" fill="#fafafa"
                                                 height="24" role="img" viewBox="0 0 24 24" width="24">
                                                <path
                                                    d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
                                            </svg> :
                                            <svg aria-label="Сохранить" color="#fff" fill="#fff" height="24" role="img"
                                                 viewBox="0 0 24 24" width="24">
                                                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                                         stroke="currentColor" strokeLinecap="round"
                                                         strokeLinejoin="round"
                                                         strokeWidth="2"></polygon>
                                            </svg>}
                                    </div>
                                </div>
                                <div className="posts__info">
                                    <p className='howmany__licked__this__post'>
                                        <span>{posts.how__many__licked}</span> отметок "Нравится"</p>
                                    <p><span>{posts.createdby}</span> {posts.bio}</p>
                                    <a href="#">Посмотреть все комментарии (9)</a>
                                    <p className='date__of__publicated'>5 дней назад</p>
                                </div>
                                <div className="reply__coment">
                                    <div className="icon__with__padding">
                                        <svg aria-label="Смайлик" color="#fafafa" fill="#fafafa" height="24" role="img"
                                             viewBox="0 0 24 24" width="24">
                                            <path
                                                d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                                        </svg>
                                    </div>
                                    <input type="text" placeholder='Добавьте комментарий...'/>
                                    <button>Опубликовать</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="other__accaunt__and__followers">
                    <div className="own__accaunt">
                        <img src="../images/profileImage.jpg" alt=""/>
                        <div>
                            <h4>muhammadrizo20.04</h4>
                            <p>Muhammadrizo</p>
                        </div>
                        <span className="cursorpointer">Переключиться</span>
                    </div>
                    <div className="recomentded__info">
                        <p>Рекомендации для вас</p>
                        <a href="#">Все</a>
                    </div>
                    <div className="recomended__accaunts">
                        <div className="recomended__account__wrap">
                            <div className="recomended__accaunt">
                                <div className='recomended__user__main__info'>
                                    <img src="../images/users/1.jpg" alt=""/>
                                    <div className='who__is__this__user'>
                                        <h4>m1racleo</h4>
                                        <span>
                      Рекомендации для вас
                    </span>
                                    </div>
                                </div>
                                <button className="cursorpointer">
                                    Подписаться
                                </button>
                            </div>
                        </div>
                        <div className="recomended__account__wrap">
                            <div className="recomended__accaunt">
                                <div className='recomended__user__main__info'>
                                    <img src="../images/users/2.jpg" alt=""/>
                                    <div className='who__is__this__user'>
                                        <h4>amv_viper</h4>
                                        <span>
                      Рекомендации для вас
                    </span>
                                    </div>
                                </div>
                                <button className="cursorpointer">
                                    Подписаться
                                </button>
                            </div>
                        </div>
                        <div className="recomended__account__wrap">
                            <div className="recomended__accaunt">
                                <div className='recomended__user__main__info'>
                                    <img src="../images/users/3.jpg" alt=""/>
                                    <div className='who__is__this__user'>
                                        <h4>zerox_ae</h4>
                                        <span>
                      Рекомендации для вас
                    </span>
                                    </div>
                                </div>
                                <button className="cursorpointer">
                                    Подписаться
                                </button>
                            </div>
                        </div>
                        <div className="recomended__account__wrap">
                            <div className="recomended__accaunt">
                                <div className='recomended__user__main__info'>
                                    <img src="../images/users/1.jpg" alt=""/>
                                    <div className='who__is__this__user'>
                                        <h4>m1racleo</h4>
                                        <span>
                      Рекомендации для вас
                    </span>
                                    </div>
                                </div>
                                <button className="cursorpointer">
                                    Подписаться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
