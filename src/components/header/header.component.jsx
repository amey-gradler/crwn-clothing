import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg'
import '../header/header.styles.scss'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import CartIcon from '../cart-icon/cart-icon.component'

const Header = ({ currentUser , hidden })=>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropdown/> 
        }
    </div>


)

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})
 
export default connect(mapStateToProps)(Header)