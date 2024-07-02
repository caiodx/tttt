import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonThumbnail, IonLabel, IonItem } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { GeoLocationService } from '../services/geoLocation.service';
import { Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonThumbnail, IonLabel, IonItem],
})
export class HomePage {

  private geoLocationPosition?: Geoposition = undefined
  public cityName?: string = "Lisbon"
  public countryCode? : string = "PT"
  public weatherConditionCode? : string = "01d"
  public weatherConditionDescription?: string = "Sun"
  public weatherDegrees? : number 


  constructor(private platform: Platform, private geoLocationService: GeoLocationService, private weatherService : WeatherService) {
    this.platform.ready().then(() => {
      console.log("device ready!")
    })
  }

  async ionViewDidEnter() {
    this.geoLocationPosition = await this.geoLocationService.GetPosition()
    const weather = await this.weatherService.GetWeatherByCoord(this.geoLocationPosition.coords.latitude, this.geoLocationPosition.coords.longitude)
    console.log(weather)
    this.cityName = weather.name
    this.weatherConditionDescription = weather.weather[0]?.description
    this.weatherConditionCode = weather.weather[0]?.icon
    this.countryCode = weather.sys.country
    this.weatherDegrees = Math.floor(weather.main.temp) 
  }

}
