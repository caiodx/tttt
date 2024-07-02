import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonThumbnail, IonLabel, IonItem } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { GeoLocationService } from '../services/geoLocation.service';
import { Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonThumbnail, IonLabel, IonItem],  
})
export class HomePage {

  private geoLocationPosition? : Geoposition = undefined
  public cityName? : string = "Lisbon"

  constructor(private platform: Platform, private geoLocationService: GeoLocationService) {
    this.platform.ready().then(() => {
      console.log("device ready!")
    })
  }

  async ionViewWillEnter(){
    this.geoLocationPosition = await this.geoLocationService.GetPosition()
  }

}
