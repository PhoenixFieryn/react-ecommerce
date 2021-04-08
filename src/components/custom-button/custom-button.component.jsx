import './custom-button.styles.scss';

export const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	backdropBlur,
	shadow,
	...otherProps
}) => (
	<button
		className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''} ${
			inverted ? 'inverted' : ''
		} ${backdropBlur ? 'backdrop-blur' : ''}
		${shadow ? 'shadow' : ''}`}
		{...otherProps}
	>
		{children}
	</button>
);
