import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MorePage } from './../more/more';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  user : any;
  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public popoverCtrl: PopoverController
  ) {
    this.user = {
      "name": "Marco"
      , "email": ""
      , "username": "markh"
      , "millage": "5"
    }
    console.log(this.user);
  }

  more(myEvent) {
    let popover = this.popoverCtrl.create(MorePage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
