import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="notFound">
      <div className="container">
        <div className="text">
          <h1>404 Error - Page not found</h1>
          <div className="buttons"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <button
              className="button"
            >
              <Link className={isHovered ? "classBlue" : "whiteLink"} to="/">Go Home</Link>
            </button>
          </div>
        </div>
        <span>Uh oh, looks like the page you are looking for has moved or no longer exists.</span>
      </div>
    </section>
  )
}

export default NotFound

