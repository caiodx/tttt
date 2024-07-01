import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  
})
export class HomePage {
  constructor(private geolocation: Geolocation, private platform: Platform) {

    this.platform.ready().then(() => {

      console.log("preparado")

      

      geolocation.getCurrentPosition().then(valor => {

        console.log(valor)
      })
     
    });



  }
}
