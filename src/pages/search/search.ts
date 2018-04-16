import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MorePage } from './../more/more';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public popoverCtrl: PopoverController
  ) {}

  more(myEvent) {
    let popover = this.popoverCtrl.create(MorePage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
