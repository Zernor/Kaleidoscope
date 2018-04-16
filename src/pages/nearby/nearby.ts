import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MorePage } from './../more/more';

/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {
  visibleBabysitting = true;
  visibleGroups = true;
  items: any;
  filterItems: any;
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
      },
      {
        "id": "3"
        , "type": "Groups"
        , "title": "Rainier Beach Library"
        , "content": "It is a weekly group for parents or caregivers with their children age birth to five. No registration required."
        , "img": "../../assets/imgs/example2.jpg"
      }
    ];

    this.filterItems = [
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
      },
      {
        "id": "3"
        , "type": "Groups"
        , "title": "Rainier Beach Library"
        , "content": "It is a weekly group for parents or caregivers with their children age birth to five. No registration required."
        , "img": "../../assets/imgs/example2.jpg"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbyPage');
  }


  more(myEvent) {
    let popover = this.popoverCtrl.create(MorePage);
    popover.present({
      ev: myEvent
    });
  }

  filterOut(type) {
    if (type == "Babysitting") {
      if (this.visibleBabysitting == true) {
        this.visibleBabysitting = false;
        this.filterItems = this.filterItems.filter((item) => {
          return (item.type.toLowerCase().indexOf(type.toLowerCase()) < 0);
        });
      } else {
        this.visibleBabysitting = true;
        this.filterItems = this.items;
        if (this.visibleGroups == false){
          let value = "Groups"
          this.filterItems = this.filterItems.filter((item) => {
            return (item.type.toLowerCase().indexOf(value.toLowerCase()) < 0);
          });
        }
      }
    } else if (type == "Groups") {
      if (this.visibleGroups == true) {
        this.visibleGroups = false;
        this.filterItems = this.filterItems.filter((item) => {
          return (item.type.toLowerCase().indexOf(type.toLowerCase()) < 0);
        });
      } else {
        this.visibleGroups = true;
        this.filterItems = this.items;
        if (this.visibleBabysitting == false){
          let value = "Babysitting"
          this.filterItems = this.filterItems.filter((item) => {
            return (item.type.toLowerCase().indexOf(value.toLowerCase()) < 0);
          });
        }
      }
    } else {
      return;
    }
  }

}
