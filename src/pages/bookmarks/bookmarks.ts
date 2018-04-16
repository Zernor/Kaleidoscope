import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MorePage } from './../more/more';
/**
 * Generated class for the BookmarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {

  items: any;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public popoverCtrl: PopoverController
  ) {
    this.items = [
      {
        "id": "1"
        , "type": "Groups"
        , "title": "Family Resource Center"
        , "content": "For children under 5 yrs and the grandparents, aunts, parents, older brothers and sisters, friends and others who take care of them. Have lots of fun with stories, music and activities! No registration required."
        , "img": "../../assets/imgs/example1.jpg"
      },
      {
        "id": "2"
        , "type": "Babysitting"
        , "title": "Babysitting"
        , "content": "It is a weekly group for parents or caregivers with their children age birth to five. No registration required."
        , "img": "../../assets/imgs/babysitting-services.jpeg"
      }
    ];
  }

  more(myEvent) {
    let popover = this.popoverCtrl.create(MorePage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');
  }

}
