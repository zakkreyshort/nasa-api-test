export class Mars {
    async getWeather() {
        try{
            let answer = await fetch (`https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`);
            let jsonifiedAnswer = await answer.json();
            return jsonifiedAnswer;
        } catch(error){
            console.error("there was an error handing your request:" + error.message)
        }
    };
}