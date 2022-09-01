import React from 'react'
import './Header.css'
import { BiSearch } from "react-icons/bi"
import { FaAndroid } from "react-icons/fa"
import { FaApple } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"

const Header = () => {
  return (
    <div className="header">
        <div className="header__container">
            <div className="header__left">
                <BiSearch className='header__iconColor header__searchIcon'/>
                <input type="text" className="header__input" placeholder='Search ....'/>
            </div>

            <div className="header__center">
                <div className="header__secondary">Article</div>
                <div className="header__secondary">Article</div>
                <div className="header__main">Pew News</div>
                <div className="header__secondary">Article</div>
                <div className="header__secondary">Article</div>
            </div>

            <div className="header__right header__iconColor header__icon">
                <FaAndroid className='header__iconAndroid header__icon'/>
                <FaApple className='header__iconApple header__icon'/>
                <div className="header__getApp header__icon">
                    Download App
                </div>
                <BsArrowRight className='header__icon header__iconArrow'/>

            </div>

        </div>
    </div>
  )
}

export default Header