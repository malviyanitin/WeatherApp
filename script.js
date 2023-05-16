const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const APIkey = '22764bf47f66e4ce9ba7ec70be72d1a2';
let k;

  
  async function fetchData(city) {
    try {
      let response = await fetch(url+city + '&appid=' + APIkey);
      let result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  } 
 
  fetchData("delhi").then(result => {
    console.log(result);
  dltemp.innerHTML       = (result.main.temp-273).toFixed(1);
  dlfeels_like.innerHTML = (result.main.feels_like-273).toFixed(1);
  dlhumidity.innerHTML   = result.main.humidity;
  dlmin_temp.innerHTML   = (result.main.temp_min-273).toFixed(1);
  dlmax_temp.innerHTML   = (result.main.temp_max-273).toFixed(1);
  });
  fetchData("mumbai").then(result => {
    console.log(result);
    mtemp.innerHTML =        (result.main.temp-273).toFixed(1);
    mfeels_like.innerHTML =  (result.main.feels_like-273).toFixed(1);
    mhumidity.innerHTML =  result.main.humidity;
    mmin_temp.innerHTML =  (result.main.temp_min-273).toFixed(1);
    mmax_temp.innerHTML =  (result.main.temp_max-273).toFixed(1);
    });
    fetchData("chennai").then(result => {
      console.log(result);
      ctemp.innerHTML        = (result.main.temp-273).toFixed(1);
      cfeels_like.innerHTML  = (result.main.feels_like-273).toFixed(1);
      chumidity.innerHTML    = result.main.humidity;
      cmin_temp.innerHTML    = (result.main.temp_min-273).toFixed(1);
      cmax_temp.innerHTML    = (result.main.temp_max-273).toFixed(1);
      });
   submit.addEventListener("click",(e)=>{
    console.log(inputt.vaue);
    e.preventDefault();
    fetchData(inputt.value).then(result => {
      console.log(result);
      searchCard.innerHTML= inputt.value;
      ctemp.innerHTML       = (result.main.temp-273).toFixed(1);
      cfeels_like.innerHTML = (result.main.feels_like-273).toFixed(1);
      chumidity.innerHTML   = result.main.humidity;
      cmin_temp.innerHTML   = (result.main.temp_min-273).toFixed(1);
      cmax_temp.innerHTML   = (result.main.temp_max-273).toFixed(1);
      });
   })
  

  
  
