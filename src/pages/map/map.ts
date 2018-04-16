import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { MorePage } from './../more/more';
import { MapMarkerPage } from '../map-marker/map-marker';

declare let google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any;
  infoWindow: any;
  locations = [[47.7560, -122.3457], [47.6323, -122.3569]];

  initMap() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let infowindow = new google.maps.InfoWindow({
    });
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
    this.addCurrentPostion(location);
    let i = 0;
    for (i = 0; i < this.locations.length; i++) {
      let clocation = new google.maps.LatLng(this.locations[i][0], this.locations[i][1]);
      this.addMarker(clocation, i);
    }
    directionsDisplay.setMap(this.map);
  }

  addMarker(position, num) {
    let tmpNum = "";
    tmpNum += num;
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position,
      title: tmpNum
    });

    let content = "<h4>Information!" + num + " </h4>";
    this.addInfoWindow(marker, content);
  }


  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      let modal = this.modalCtrl.create(MapMarkerPage, { tittle: marker.title });
      modal.present();
      console.log('Marker');
      console.log(marker);
      console.log(marker.position);
      console.log(marker.title);
    });
  }

  addCurrentPostion(position) {
    return new google.maps.Marker({
      position,
      animation: google.maps.Animation.DROP,
      map: this.map
    });
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
    public navCtrl: NavController
    , public navParams: NavParams
    , public modalCtrl: ModalController
    , public popoverCtrl: PopoverController
  ) { }


  more(myEvent) {
    let popover = this.popoverCtrl.create(MorePage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.initMap();
  }

}
