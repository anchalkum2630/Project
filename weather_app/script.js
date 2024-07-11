function Check_weather_info(){
    const city=document.querySelector("#cityInput").value;
    const api_key="feb2e672fdef9da2502df8df74d6f96b";
    const weather=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    console.log(city);
    console.log(weather);
    fetch(weather)
    .then((response)=>{
        if(response.status=="404"){
            document.querySelector("#error").style.display="block";
            document.querySelector("#display_box").style.display="none";
            throw new Error('City not found');
        }else
        {return response.json()}
        
    })
    .then((data)=>{
        const date = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        const day = days[date.getDay()];
        const dateString = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based
        const year = date.getFullYear();
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.querySelector("#display_box").style.display="block";
        document.querySelector("#error").style.display="none";
        document.getElementById("date").textContent = `${day}, ${dateString}/${month}/${year}`;
        document.getElementById("time").textContent = time;
        document.querySelector("#temp").innerHTML=Math.round(data.main.temp)+"&deg;C"
        document.querySelector("#temp_feel").innerHTML=Math.round(data.main.feels_like)+"&deg;C"
        document.querySelector("#wind").innerHTML=data.wind.speed+"m/s"
        document.querySelector("#humid").innerHTML=Math.round(data.main.humidity)+"%"
        if(data.weather[0].main==="Clouds"){
            document.querySelector("#wea_img").src="image/cloud.png"
        }else if(data.weather[0].main==="Snow"){
            document.querySelector("#wea_img").src="image/snow.png"
        }else if(data.weather[0].main==="Rain"){
            document.querySelector("#wea_img").src="image/rain.png"
        }else if(data.weather[0].main==="Clear"){
            document.querySelector("#wea_img").src="image/clear.png"
        }else if(data.weather[0].main==="Haze"){
            document.querySelector("#wea_img").src="image/haze.png"
        }
    })
    .catch((error) => {
            console.error('Error:', error.message);
        });
}

document.querySelector("#but").addEventListener("click",()=>{
    Check_weather_info();
});
