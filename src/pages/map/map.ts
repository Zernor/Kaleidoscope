import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google: any;


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any;

  //markers = [];
  locations = [[47.7560, -122.3457], [47.6323, -122.3569]];

  // example data
  // [47.7560, -122.3457], [47.6323, -122.3569]

  initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    // My location
    const location = new google.maps.LatLng(47.6062, -122.3321);

    // Map
    const options = {
      zoom: 10,
      center: location,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      mapTypeIds: ['roadmap']
    };
    this.map = new google.maps.Map(document.getElementById('map'), options);

    this.currentMarker(location, this.map);

    var i = 0;
    for (i = 0; i < this.locations.length; i++) {
      var clocation = new google.maps.LatLng(this.locations[i][0], this.locations[i][1]);
      var marker = new google.maps.Marker({
        position: clocation,
        animation: google.maps.Animation.DROP,
        map: this.map
      });
      (function (marker) {
        google.maps.event.addListener(marker, "click", function (e) {
          directionsService.route({
            origin: location,
            destination: marker.position,
            travelMode: 'DRIVING'
          }, function (response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        });
      })(marker);
      //this.markers.push[marker];
      //marker.addListener('click', this.calculateAndDisplayRoute(this.map, location, clocation));
    }

    directionsDisplay.setMap(this.map);

  }

  currentMarker(position, map) {
    return new google.maps.Marker({
      position,
      animation: google.maps.Animation.BOUNCE,
      map
    });

    //this.markers.push[marker];
  }

  calculateAndDisplayRoute(map, start, end) {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    const locStart = start;
    const locEnd = end;//new google.maps.LatLng(47.7560, -122.3457);

    directionsService.route({
      origin: locStart,//document.getElementById('start').value,
      destination: locEnd,//document.getElementById('end').value,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setMap(map);
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.initMap();
  }

}
