import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: rgba(0, 0, 0, 1);
	color: white;
	border: none;

	&:hover {
		background-color: rgba(255, 255, 255, 1);
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: rgba(255, 255, 255, 1);
	color: black;

	&:hover {
		background-color: rgba(0, 0, 0, 1);
		color: white;
		border: none;
	}
`;

const shadowStyles = css`
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
`;

const invertedBackdropBlurStyles = css`
	background-color: rgba(255, 255, 255, 0.8);
	color: black;

	&:hover {
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const backdropBlurStyles = css`
	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		-webkit-backdrop-filter: saturate(1.8) blur(10px);
		backdrop-filter: saturate(1.8) blur(10px);
	}
`;

const getGoogleSignInStyles = (props) => {
	return props.isGoogleSignIn ? googleSignInStyles : '';
};

const getInvertedStyles = (props) => {
	if (props.isGoogleSignIn) {
		return;
	}
	if (props.inverted) {
		if (props.backdropBlur) {
			return invertedBackdropBlurStyles;
		}
		return invertedButtonStyles;
	}
	return buttonStyles;
};

const getShadowStyles = (props) => {
	return props.shadow ? shadowStyles : '';
};

const getBackdropBlurStyles = (props) => {
	if (props.isGoogleSignIn) {
		return;
	}
	return props.backdropBlur ? backdropBlurStyles : '';
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 1.5rem;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Montserrat';
	font-weight: 500;
	cursor: pointer;
	display: flex;
	justify-content: center;
	border: none;

	${getGoogleSignInStyles}
	${getInvertedStyles}
	${getShadowStyles}
	${getBackdropBlurStyles}
`;
