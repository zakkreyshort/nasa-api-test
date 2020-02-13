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
      getElements(response);
    })();
    let rng = Math.floor(Math.random() * 1000) + 1;
    function getElements(nasa) {
        $("#nasaImage").attr("src", nasa.photos[rng].img_src);
        $("#roverName").text(nasa.photos[rng].rover.name);
        $("#earthDate").text(nasa.photos[rng].earth_date);
        $("#cameraOut").text(nasa.photos[rng].camera.name);
        $("#output").show();
    }
  });
  (async () => {
    let mars = new Mars();
    const answer = await mars.getWeather();
    getElements(answer);
  })();
  function getElements(mars) {
    console.log(mars);
    console.log(Object.keys(mars));
    let marsW = mars[425].AT.av;
    marsW.toString();
    $("#day1Weather").text(marsW);
  }
});