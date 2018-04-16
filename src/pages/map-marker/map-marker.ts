import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

declare let google: any;

@Component({
  selector: 'page-map-marker',
  templateUrl: 'map-marker.html',
})
export class MapMarkerPage {
  slides: any;
  map2: any;

  destination = new google.maps.LatLng(47.7560, -122.3457);
  myLocation = new google.maps.LatLng(47.6062, -122.3321);

  tittle = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    //this.marker = navParams.get('marker');
    this.slides = [
      {
        title: "Welcome to Example!",
        image: "../../assets/imgs/example1.jpg",
      },
      {
        title: "What is Ionic?",
        image: "../../assets/imgs/example2.jpg",
      }
    ];
    this.tittle = navParams.get('tittle');
  }


  initMap() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const location = this.destination;

    const options = {
      zoom: 15,
      center: location,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      mapTypeIds: ['roadmap']
    };
    this.map2 = new google.maps.Map(document.getElementById('map2'), options);
    this.addCurrentPostion(location);

    directionsDisplay.setMap(this.map2);


    //this.calculateAndDisplayRoute(directionsService, directionsDisplay, this.myLocation, this.destination);
  }


  addCurrentPostion(position) {
    return new google.maps.Marker({
      position,
      animation: google.maps.Animation.DROP,
      map: this.map2
    });
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay, start, end) {
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
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
    this.initMap();
  }

}
