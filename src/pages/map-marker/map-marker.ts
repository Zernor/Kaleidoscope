import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
declare let google: any;

/**
 * Generated class for the MapMarkerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map-marker',
  templateUrl: 'map-marker.html',
})
export class MapMarkerPage {
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionsService = new google.maps.DirectionsService;
  marker;
  location = new google.maps.LatLng(47.6062, -122.3321);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    //this.directionsDisplay.setPanel(document.getElementById('directions'));
    //this.directionsDisplay = navParams.get('directions');
    //this.marker = navParams.get('marker');
    //console.log(this.marker);

    //this.calculateDirections(this.location, this.marker.position);

  }

  calculateDirections(start, end) {
    this.directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapMarkerPage');
  }

}
