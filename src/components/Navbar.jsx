import React from 'react'
import github from "./../img/github.svg"

const Navbar = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__nav">
                    <div className="header__nav_logo">
                        <h2 className="header__nav_logo_h">
                            <span className='header__nav_logo_span'>Pak</span>FoOx1t
                        </h2>
                    </div>
                    <li className="header__nav_list">
                        <ul className="header__nav_list_item">
                            <a href="" className="header__nav_list_item_link">
                                Обо мне
                            </a>
                        </ul>
                        <ul className="header__nav_list_item">
                            <a href="" className="header__nav_list_item_link">
                                Опыт
                            </a>
                        </ul>
                        <ul className="header__nav_list_item">
                            <a href="" className="header__nav_list_item_link">
                                Проекты
                            </a>
                        </ul>
                    </li>
                    <li className="header__nav_social">
                        <ul className="header__nav_social_media">
                            <a href="" className="header__nav_social_media_link">
                                <img src={github} alt="" />
                            <p className="header__nav_social_media_link_item">
                                Github
                            </p>
                            </a>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Navbar