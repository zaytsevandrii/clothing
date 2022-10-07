import React from "react"
import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as CrwnLogo } from "../../../src/assets/086 crown.svg"
import "./navigation.styles.scss"

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
