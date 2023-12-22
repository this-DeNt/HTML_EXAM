$(".burger").click(function(){

    $("#aside-container").toggle("fast");
});

$(".add-vid").click(function() {

    const template = document.querySelector("#vid-template").innerHTML;
    let cloneVid = Mustache.render(template);

    let main = document.querySelector(".main");
    main.insertAdjacentHTML("beforeend", cloneVid);

    let storedVids = JSON.parse(localStorage.getItem("storedVids")) || [];
    storedVids.push(cloneVid);

    localStorage.setItem("storedVids", JSON.stringify(storedVids));

});

let localVids = JSON.parse(localStorage.getItem("storedVids")) || [];
localVids.forEach(localVid => {

    let main = document.querySelector(".main");
    main.insertAdjacentHTML("beforeend", localVid);
    
});

$(document).ready(function() {
    $.ajax({

        url: 'https://api.openweathermap.org/data/2.5/weather?q=Odesa&appid=a26fbf883dccbe3d4ffe814d94c7a73e&units=metric',
        type: 'GET',
        dataType: 'jsonp',
        
        success: function(data) {

            let temp = Math.round(data.main.temp);
            let icon = data.weather[0].icon;
            
            let city = "Odesa";

            $("#weather-city").html(city);
            $("#weather-temp").html(`${temp} &#176;C`)
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${icon}.png`
        }
    });
});