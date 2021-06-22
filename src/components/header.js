import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {


    return (
        <div className="nav">
            <Link to ="/">
                <div className="navdiv">Main</div>
            </Link>
            <Link to ="/Info">
                <div className="navdiv">Information</div>
            </Link>
            <Link to ="/About">
                <div className="navdiv">About</div>
            </Link>
        </div>
    )
}

export default Header