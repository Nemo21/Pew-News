import React, { useState } from 'react'
import './Header.css'
import { BiSearch } from "react-icons/bi"
import { FaAndroid, FaApple } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${search}`)
    }
  return (
    <div className="header">
        <div className="header__container">
            <div className="header__left">
                <BiSearch className='header__iconColor header__searchIcon'/>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="header__input" placeholder='Search....' value={search} onChange={(e) => setSearch(e.target.value)}/>
                </form>
            </div>

            <div className="header__center">
                <div className="header__secondary">Blog</div>
                <div className="header__secondary">Article</div>
                <Link to="/" className="header__main link">Pew News</Link>
                <div className="header__secondary">News</div>
                <div className="header__secondary">Podcast</div>
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