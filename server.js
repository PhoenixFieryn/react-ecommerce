const path = require('path');

const express = require('express');
const compression = require('compression');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(compression());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}
	next();
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', (req, res, next) => {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.post('/payment', (req, res, next) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: 'usd',
	};

	console.log(body);

	tripe.charges.create(body, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).json({ error: stripeErr });
		} else {
			res.status(200).json({ success: stripeRes });
		}
	});
});

app.use((error, req, res, next) => {
	console.error(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});

app.listen(port, (error) => {
	if (error) throw error;
	console.log(`Server running on ${port}`);
});
