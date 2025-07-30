function showweatherDetails(event) {
      event.preventDefault();

      const city = document.getElementById('city').value;
      const apiKey = '66392d31927311ce473a710aabd3fb14'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      
      
       fetch(apiUrl)
              .then(response => response.json())
              .then(data => {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                        <p>Temperature: ${data.main.temp} °F</p>
                                        <p>Weather: ${data.weather[0].description}</p>`;
              })
              .catch(error => {
                  console.error('Error fetching weather:', error);
                  const weatherInfo = document.getElementById('weatherInfo');
                  weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
                });
}



 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );