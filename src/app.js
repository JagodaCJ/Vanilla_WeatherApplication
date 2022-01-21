function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "3466066efb0edf0b14eb5f1483698871";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
