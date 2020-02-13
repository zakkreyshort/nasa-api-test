export class Mars {
    async getWeather() {
        try{
            let answer = await fetch (`https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`);
            let jsonifiedAnswer;
            if (Response.ok && Response.status == 200) {
                jsonifiedResponse = await answer.json();
            } else {
                jsonifiedAnswer = false;
            }
            return jsonifiedAnswer;
        } catch(error){
            return false;
        }
    };
}