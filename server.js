// Setup empty JS object to act as endpoint for all routes
projectData = {};


const port = 3000;
// Require Express to run server and routes
const express = require('express');
// const bootstrap = require('bootstrap');

// Start up an instance of app
const app = express();
// app.use('/css', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/css')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/js')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/jquery/dist')))
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, listening);

function listening(){
	console.log(`Listening on port:  ${port}`);
}

//get route function
app.get('/getData', function(req,res){
	res.send(projectData);
});


//post route function
app.post('/postData', function(req,res){
	const dataRecieved = req.body;
	projectData["temperature"]= dataRecieved.main.temp;
	projectData["date"]= dataRecieved.dt;
	projectData["userResponse"]= dataRecieved.userResponse;
	res.send(projectData);
});