import React from 'react'
import { Link } from 'react-router-dom'
import { options } from '../dummyData'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
        <div className="nav__container">
          {
            options && options.map((option) => (

              <Link to={`/search/${option}`} className="nav__item link">{option}</Link>
            ))
          }
        </div>
    </div>
  )
}

export default Nav