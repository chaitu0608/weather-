async function getData(url = '') {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData('https://api.openweathermap.org/data/2.5/weather?q=Navi%20Mumbai&units=metric&appid=478722882c6e69b8d13f836cc9cb2543')
    .then(data => {
        if (data) {
            console.log(data); // Debugging line
            document.getElementById("temprature").innerHTML = data.main.temp + "°C";
            document.getElementById("humidity").innerHTML = data.main.humidity + "%";
            document.getElementById("loc").innerHTML = data.name;
        }
    });

setInterval(function() {
    var today = new Date();

    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[today.getDay()];
    document.getElementById("day").innerHTML = day;
}, 1000);
