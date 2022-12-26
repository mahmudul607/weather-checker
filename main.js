
const weatherBtn = document.getElementById("submit");
weatherBtn.addEventListener("click", function(){

    const inputName = document.getElementById('cityName').value;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputName + "&appid=03dd7a4ef421c3e104a490ab9b036403")

    .then( res => res.json())
    .then( data => {
        console.log(data);
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const des = data.weather[0].description;

        document.getElementById("take-cityName").innerText = cityName;
        document.getElementById("take-temp").innerText = temp.toFixed(2);
        document.getElementById("take-des").innerText = des;
    })

    .catch(res => alert("Enter a valid City name !!!"))

});