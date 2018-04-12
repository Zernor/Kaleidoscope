import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapMarkerPage } from '../map-marker/map-marker';

declare let google: any;


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
  infoWindow: any;

  //markers = [];
  locations = [[47.7560, -122.3457], [47.6323, -122.3569]];

  // example data
  // [47.7560, -122.3457], [47.6323, -122.3569]

  initMap() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

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
    //directionsDisplay.setPanel(document.getElementById('right-panel'));

    this.currentMarker(location, this.map);
    /*
    this.infoWindow = new google.maps.InfoWindow;
    let pos = {
      lat: 47.6062,
      lng: -122.3321
    };

    this.infoWindow.setPosition(pos);
    this.infoWindow.setContent('Location found.');
    this.infoWindow.open(this.map);
    this.map.setCenter(pos);*/


    let i = 0;
    for (i = 0; i < this.locations.length; i++) {
      let clocation = new google.maps.LatLng(this.locations[i][0], this.locations[i][1]);
      let marker = new google.maps.Marker({
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
              this.openMapMarkerPage();
              //directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        });
      })(marker);
    }
    //directionsDisplay.setMap(this.map);
  }

  openMapMarkerPage(){
    this.navCtrl.push(MapMarkerPage);
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
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.initMap();
  }

}
