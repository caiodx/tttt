import { Injectable } from '@angular/core';
import { WeatherRoot } from '../model/weater.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

    private readonly API_KEY: string = 'SEU_API_KEY';
    private readonly WEATHER_ENDPOINT: string = 'https://api.openweathermap.org/data/2.5/weather';

    async GetWeatherByCoord(lat: string, lon: string) : Promise<WeatherRoot>{
        const url = `${this.WEATHER_ENDPOINT}?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`        
        const response = await fetch(url)

        if (response.ok) {
          const data = await response.json()
          return data as WeatherRoot;
        } else {
          throw new Error('Falha ao buscar dados do clima.');
        }
    }

    async GetWeatherByCity(cityCode: number) : Promise<WeatherRoot>{
        const url = `${this.WEATHER_ENDPOINT}?q=${cityCode}&appid=${this.API_KEY}`        
        const response = await fetch(url)

        if (response.ok) {
          const data = await response.json()
          return data as WeatherRoot;
        } else {
          throw new Error('Falha ao buscar dados do clima.');
        }
    }
 
}