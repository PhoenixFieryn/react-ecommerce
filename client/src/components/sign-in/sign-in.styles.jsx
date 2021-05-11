import styled from 'styled-components';

export const SignInContainer = styled.div`
	width: 28rem;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		width: auto;

		button {
			padding: auto 2rem;
		}
	}
`;

export const SignInTitle = styled.h2`
	margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		flex-direction: column;

		button {
			margin-bottom: 1rem;
		}
	}
`;
