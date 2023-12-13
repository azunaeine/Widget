// The JavaScript code was created by ChatGPT and https://jsonplaceholder.typicode.com/ //
// const MY_API_KEY = process.env.WEATHER_API_KEY;
const MY_API_KEY = "GaprWfA7AC2bV7re4Dftrx53X5xuaM0d";
const TORONTO_LAT = "43.6532";
const TORONTO_LON = "79.3832";
document.addEventListener("DOMContentLoaded", function () {
  // API endpoint
  var apiURL = `https://api.tomorrow.io/v4/weather/forecast?location=${TORONTO_LAT},${TORONTO_LON}&apikey=GaprWfA7AC2bV7re4Dftrx53X5xuaM0d`;
  // https://jsonplaceholder.typicode.com
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const temperatureAvg = data.timelines.daily[0].values.temperatureAvg;
      document.querySelector(".temperature").textContent = temperatureAvg;
      console.log(data);
      debugger;
    });
});

// Specify the API URL for Toronto timezone
var apiURL = "http://worldtimeapi.org/api/timezone/America/Toronto";

// Make the fetch request
fetch(apiURL)
  .then((response) => {
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON response
    return response.json();
  })
  .then((data) => {
    // Access the relevant information from the API response
    const torontoTime = new Date(data.utc_datetime).toLocaleTimeString(
      "en-US",
      {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }
    );

    // Update the content of the HTML element with class "time"
    document.querySelector(".time").textContent = torontoTime;

    // Log or use the data as needed
    console.log("Current time in Toronto:", torontoTime);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error fetching data:", error);
  });

document.addEventListener("DOMContentLoaded", function () {
  // Get the current date
  const currentDate = new Date();

  // API URL for Canadian holidays
  const apiURL = `https://date.nager.at/api/v3/publicholidays/${currentDate.getFullYear()}/ca`;

  // Fetch the holidays
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      // Find the upcoming holiday
      const upcomingHoliday = data.find(
        (holiday) => new Date(holiday.date) > currentDate
      );

      // Update the text content of the element with class 'holiday'
      const holidayElement = document.querySelector(".holiday");
      if (upcomingHoliday) {
        holidayElement.textContent = `The next upcoming holiday is ${upcomingHoliday.name} on ${upcomingHoliday.date}`;
      } else {
        holidayElement.textContent = "There are no upcoming holidays.";
      }
    })
    .catch((error) => {
      console.error("Error fetching holidays:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the CoinCap API
  fetch("https://api.coincap.io/v2/assets/bitcoin")
    .then((response) => response.json())
    .then((data) => {
      // Access the relevant information (e.g., price) from the API response
      const bitcoinPrice = data.data.priceUsd;

      // Round the Bitcoin price to the nearest whole number
      const roundedBitcoinPrice = Math.round(parseFloat(bitcoinPrice));

      // Update the text content of the element with the class .crypto
      const cryptoElement = document.querySelector(".crypto");
      cryptoElement.textContent = `$${roundedBitcoinPrice}`;
    })
    .catch((error) => {
      console.error("Error fetching data from CoinCap API:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select the elements with the classes .main, .flexbox, and .exit
  const mainElement = document.querySelector(".main");
  const flexboxElement = document.querySelector(".flexbox");
  const Button = document.querySelector(".button");

  // Add a click event listener to the .exit button
  Button.addEventListener("click", function () {
    // Toggle the visibility of the .flexbox element when the .button button is clicked
    flexboxElement.style.display =
      flexboxElement.style.display === "none" ? "flex" : "none";

    // Reload the page when the .exit button is clicked
    location.reload();
  });
});
