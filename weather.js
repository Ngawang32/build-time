const url = `http://api.openweathermap.org/data/2.5/`;
const apiKey = `e37e4572398874bcf3e1746afeecefdf`;
const searchBox = document.querySelector('.search-box')
console.log('this is weather')

// event listeners
searchBox.addEventListener('keypress', setQuery);


// functions
function setQuery(e)  {
 if(e.keyCode === 13) {
   getResults(searchBox.value);
   console.log(searchBox.value)
 }
}

function getResults(query) {
    fetch(`${url}weather?q=${query}&units=metric&APPID=${apiKey}`)
    .then(weather => {
        return weather.json()
    }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather)
    let city = document.getElementById('city');
    city.innerText = `${weather.name}`

    let country = document.getElementById('country');
    country.innerText = `${weather.name}, ${weather.sys.country}`;

    let now  = new Date();
    let date  = document.querySelector('.date');
    date.innerText = dateBuilder(now);

    let temps = document.querySelector('.temperature .temp');
    temps.innerHTML = `${Math.round(weather.main.temp)}<span>&degc</span>`
    console.log(temps);     
}

function dateBuilder(d) {
 let months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
 let days =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 let day = days[d.getDay()];
 let date = d.getDate();
 let month = months[d.getMonth()];
 let year = d.getFullYear();

 return `${day} ${date} ${month} ${year}`;
}