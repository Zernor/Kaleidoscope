import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the HomePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nearbyRoot = 'NearbyPage'
  searchRoot = 'SearchPage'
  accountRoot = 'AccountPage'
  mapRoot = 'MapPage'
  bookmarksRoot = 'BookmarksPage'


  constructor(public navCtrl: NavController) {}

}
