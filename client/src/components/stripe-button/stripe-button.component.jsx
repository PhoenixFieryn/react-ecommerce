import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IYIneL6LKdW7TRAUCYkhVZTeykZLgSxgSv1zNhCWmO2XvBNrsHYJIyOZG4R6Cw8dUU5Ca6SuvCZl1OrhBEHzfhH00RcXmICqs';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((response) => {
				if (response.status === 200) {
					alert('Payment successful');
				}
			})
			.catch((err) => {
				console.log(`Payment error: ${JSON.parse(err)}`);
				alert(
					'There was an issue with your payment. Please use the provided credit card.'
				);
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="React eCommerce"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};
