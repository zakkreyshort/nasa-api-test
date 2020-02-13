import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Nasa } from "./nasa";

$(document).ready(function() {
  $("#clickable").click(function() {
    (async () => {
      let nasa = new Nasa();
      const response = await nasa.getImage();
      getElements(response);
    })();
    // shows a single picture in index 0, need to cycle through all of them
    function getElements(nasa) {
      $("#nasaImage").attr("src", nasa.photos[30].img_src);
    }
  });
});