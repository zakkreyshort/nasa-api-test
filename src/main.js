import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Nasa } from "./nasa";
import { Mars } from "./mars-weather";


$(document).ready(function() {
  $("#clickable").click(function() {

    (async () => {
      let nasa = new Nasa();
      const response = await nasa.getImage();
      console.log(response);
      getElements(response);
    })();
    let rng = Math.floor(Math.random() * 1000) + 1;
    function getElements(response) {
      if(response){
        $("#nasaImage").attr("src", response.photos[rng].img_src);
        $("#roverName").text(response.photos[rng].rover.name);
        $("#earthDate").text(response.photos[rng].earth_date);
        $("#cameraOut").text(response.photos[rng].camera.name);
        $("#output").show();
      } else {
        $("#nasaImage").text(`Error in handling request.`);
        $("#roverName").text(`Error in handling request.`);
        $("#earthDate").text(`Error in handling request.`);
        $("#cameraOut").text(`Error in handling request.`);
        $("#output").show();
      }
    }
  });
  (async () => {
    let mars = new Mars();
    const answer = await mars.getWeather();
    getWeatherElements(answer);
  })();
  function getWeatherElements(mars) {
    let marsW = mars[425].AT.av;
    marsW.toString();
    $("#day1Weather").text(marsW);
  }
});