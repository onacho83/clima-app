const axios = require('axios');

class Busquedas {

    historial = ['tegucigalpa', ' Madrid', 'San Jose'];

    constructor(){
        // TODO leer bd si existe
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language':'es'
        }
    }
    get paramsWeather(){
        return {
            appid: '0e74f5c8c79ff17e2a462c7f909f50c6',
            lang: 'es',
            units: 'metric'
        }
    }
    async ciudad( lugar = ''){

        try {
            
            //Peticion http
           
            const instance = axios.create(
                {
                    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                    params: this.paramsMapbox
                }
            );
            const resp = await instance.get();
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));
            

        } catch (error) {
            return [];
        }
    }

    async climarLugar(lat, lon ){

        try {
          
            const instance = axios.create(
                {
                    baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                    params: { ...this.paramsWeather, lat, lon }
                }
            )

            const resp = await instance.get();
            
            console.log(resp);
            return {
                desc: '',
                min: '',
                max: '',
                temp: ''
            }
            
        } catch (error) {
            return console.log(error);
        }
    }
}

module.exports = Busquedas;