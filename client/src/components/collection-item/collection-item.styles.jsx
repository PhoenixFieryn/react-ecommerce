import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	&:hover {
		button {
			display: flex;
		}
	}

	@media screen and (max-width: 800px) {
		width: 40vw;

		&:hover {
			button {
			}
		}
	}
`;

export const AddButton = styled(CustomButton)`
	width: 80%;
	position: absolute;
	top: 255px;
	display: none;

	@media screen and (max-width: 800px) {
		display: block;
		min-width: unset;
		padding: 0px 0.8rem;
		font-size: 0.75rem;
	}
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 0.9rem;
`;

export const NameContainer = styled.span`
	margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
	flex-grow: 1;
	text-align: right;
`;
