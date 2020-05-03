import React from "react"
import './style.scss'
import Logo from './../../assets/graphics/logo.png'

const Header = (props) => {
    return (
        <header className="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoImg" src={Logo} alt="Logo"/>
                </div>
            </div>
        </header>
    )
}

export default Header
