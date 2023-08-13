const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

app.use(express.json());
app.use(cors());

mercadopago.configure({
	access_token: "TEST-7722549398973625-123115-51fab5c15623f030056837f1adcfc0ef-668894203",
});

app.get('/', function (req, res) {
	res.send('el servidor de mercadopago funciona')
});

app.post("/create_preference", (req, res) => {
	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:5173/Succes",
			"failure": "http://localhost:5173/failure", 
			"pending": ""
		},		
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});