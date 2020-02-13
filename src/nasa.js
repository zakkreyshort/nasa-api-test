export class Nasa {
  async getImage() {
    try{
      let response = await fetch (`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200){
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}