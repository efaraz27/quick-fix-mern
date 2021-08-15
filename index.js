const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const customId = require("custom-id");

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

app.use(cors())
app.use(bodyParser.json())

const { MongoClient } = require('mongodb');
const uri = process.env.URI
const client = new MongoClient(uri);

let orderID=''


if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}



const addOrderToDB = async (data) => {
	try {
		await client.connect()
		const collection = client.db("quickfixweb").collection("orders");
		let retreivedData =''
		let result=''
		retreivedData = await collection.findOne({
			email: data.email 
		})
		console.log(`retrieved data: ${JSON.stringify(retreivedData)}`)
		if(!retreivedData){
			result = await collection.insertOne(data)
			console.log(`NEW ORDER CREATED ${JSON.stringify(result)}`);
		}
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
}


var transporter = nodemailer.createTransport(smtpTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: {
	  user: 'quickfix.kolkata@gmail.com',
	  pass: 'Moderntek@2020'
	}
}));


if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}
app.post('/book', (req, res) => {
    orderID= customId({})
    const data = {...req.body, orderID:orderID, date: Date.now()}
	console.log(req.body)
    addOrderToDB(data)
	var mailOptions = {
		from: 'quickfix.kolkata@gmail.com',
		to: req.body.email,
		subject: 'Appointment Details',
		text: 'That was easy!',
		html: `<body">
		<img src='https://i.imgur.com/f57Ntzy.png' alt='Quick Fix' width="400px" height="100px"></img>
		<div style="font-family: 'Roboto', sans-serif;">
			<h1>Thank you!</h1>
			<p>We will get in touch with you as soon as Possible.</p>
			<div style="padding: 50px;">
				<p>Here is what we recieved from you</p>
				<p>Name: ${req.body.firstName + req.body.lastName} </p>
				<p>Email: ${req.body.email} </p>
				<p>Phone: ${req.body.phone} </p>
				<p>Address: ${req.body.address1 + req.body.address2} </p>
				<p>Preferred Date and Time: ${req.body.time} </p>
			</div>
		</div>
	</body>`
	};
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email sent: ' + info.response);
		}
	}); 
})

app.post('/orderID', async (req, res) => {
	try {
		const response = {orderID:orderID}
		console.log(`sent data: ${JSON.stringify(response)}`)
		res.json(response)
	} catch (error) {
		console.log(error)
	}
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})