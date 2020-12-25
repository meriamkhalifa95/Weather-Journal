/* Global Variables */
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const keyAPI ="&appid=c95d85e11b154f1e7547b6c724e4ac80&units=metric";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getWeather = async (base,zip,key) => {
	const request = await fetch(base+zip+key);
	try{
		const data = await request.json();
		return data;
	}
	catch(error){
		console.log("error",error);
	}
}

const postData = async (url = '', data = {} )=>{
 		const userFeeling = document.getElementById('feelings').value;
       	data.userResponse =userFeeling;
       const response = await fetch(window.location.origin +url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
      try {
             return data;
      }
      catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

  const getData = async (url = '', data = {} )=>{
       const response = await fetch(url);

      try {
       		 const newData = await response.json();

       		 const dateDiv = document.getElementById('date');
       		 const newDateData= new Date(newData.date*1000);
       		 dateDiv.innerHTML = "Date: "+(newDateData.getMonth()+1)+'.'+ newDateData.getDate()+'.'+ newDateData.getFullYear();;
       		 const tempDiv = document.getElementById('temp');
       		 tempDiv.innerHTML = "Temperature: "+newData.temperature+" °C";
       		 const contentDiv = document.getElementById('content');
       		 contentDiv.innerHTML = "I am feeling: "+newData.userResponse;
             return data;
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

document.getElementById('generate').addEventListener('click', callBackFunction);

function callBackFunction() {
	const UIDiv = document.getElementById("getData");
       UIDiv.style.display="block";
	const zipId = document.getElementById('zip').value;
	getWeather(baseUrl, zipId, keyAPI).then(function(data)
	{
		console.log(data);
  		postData('/postData',data).then(getData('/getData',data));
      }

  	);;
}