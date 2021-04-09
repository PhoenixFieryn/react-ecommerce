import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { CartIcon } from '../cart-icon/cart-icon.component';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export const Header = connect(mapStateToProps)(({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/contact">CONTACT</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
));
