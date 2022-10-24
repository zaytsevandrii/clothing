import React from "react"
import { Link, Outlet } from "react-router-dom"
import { Fragment,useContext } from "react"
import { ReactComponent as CrwnLogo } from "../../../src/assets/086 crown.svg"
import "./navigation.styles.scss"
import { UserContext } from "../../components/contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx'
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../components/contexts/cart.context"

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
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
                    {currentUser ?(
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ):
                    <Link className="nav-link" to="/sign-in">
                        SIGN IN
                    </Link>
                    }
                    <CartIcon/>
                </div>
                {isCartOpen&&<CartDropDown/>}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
