const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const dataHide = document.querySelector('.middle_layer');
const getinfo = async(event) => {
    event.preventDefault();
    let city_val = cityName.value;
    dataHide.classList.add('data_hide');
    if(city_val === "")
    {
        city_name.innerHTML = "Please Enter City Name";
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=15948e50c48c719922e49c8b979e38bb`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
             city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            if(tempMood === "Clear")
            temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            else if(tempMood==="Clouds")
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            else if(tempMood === "Rain")
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            else
            temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            dataHide.classList.remove('data_hide');
        }
        catch{
            city_name.innerHTML = "Please the city Name properly";
            dataHide.classList.add('data_hide');
        }

    }

}

submitBtn.addEventListener('click',getinfo);