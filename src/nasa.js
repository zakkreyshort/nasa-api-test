export class Nasa {
  async getImage() {
    try{
      let response = await fetch (`https://api.nasa.gov/planetary/apod?${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error){
      console.error("There was an error handling your request: " + error.message)
    }
  };

}