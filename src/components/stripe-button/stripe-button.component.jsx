import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IYIneL6LKdW7TRAUCYkhVZTeykZLgSxgSv1zNhCWmO2XvBNrsHYJIyOZG4R6Cw8dUU5Ca6SuvCZl1OrhBEHzfhH00RcXmICqs';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
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
