import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 7.5px 15px;
	transition: box-shadow 0.4s ease-in-out;

	&:hover {
		cursor: pointer;
		box-shadow: 0px 6px 16px -2px rgba(0, 0, 0, 0.5);

		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& .content {
			background-color: rgba(255, 255, 255, 0.9);
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		.content {
			-webkit-backdrop-filter: saturate(1.8) blur(20px);
			backdrop-filter: saturate(1.8) blur(20px);
		}
	}

	@media screen and (max-width: 800px) {
		height: 200px;
	}
`;

export const BackgroundImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	transition: transform 6s cubic-bezier(0, 0, 0, 0);
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.8);
	transition: background-color 0.4s ease;
	position: absolute;
`;

export const ContentTitle = styled.span`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	text-transform: uppercase;
`;

export const ContentSubtitle = styled.span`
	font-weight: 300;
	font-size: 16px;
	padding-bottom: 8px;
`;
