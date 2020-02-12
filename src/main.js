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
  });
});