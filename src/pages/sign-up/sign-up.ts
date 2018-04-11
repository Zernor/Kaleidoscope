import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { PrivacyPage } from '../../pages/privacy/privacy';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  errorMsg: string = "";
  terms: boolean = false;
  user: { userName: string, password: string, confirmPassword: string } = {
    userName: "",
    password: "",
    confirmPassword: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { }

  register(user) {
    let loader = this.loadingCtrl.create({
      content: 'Register in Process...'
    });
    loader.present();

    loader.dismiss();
    this.showMsg('Registration Success', this.user.userName + ' has been successfully registered.', 'OK');
    /** 
    this.authService.register(user)
      .subscribe((response) => {
        loader.dismiss();
        this.showMsg('Registration Success', this.user.userName + ' has been successfully registered.', 'OK');
      }, error => {
        let data: any = JSON.parse(error._body);
        var errors = [];
        for (var key in data.modelState) {
          for (var i = 0; i < data.modelState[key].length; i++) {
            errors.push(data.modelState[key][i]);
          }
        }
        let errorMessage: string = errors.join();
        loader.dismiss();
        this.showErrorMsg('Registration Error', errorMessage, 'OK');
      });
      */
  }


  fbSignIn() {

    this.navCtrl.setRoot(HomePage);

    /**
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);
        let facebookAuth: any = res.authResponse;
        if (res.status === "connected") {
          let loader = this.loadingCtrl.create({
            content: 'Authenticating Credentials...'
          });
          this.fb.api("me/?fields=id,email,name,picture.width(250).height(250)", ["user_birthday"])
            .then((res: FacebookLoginResponse) => {
              let cred: any = res;
              this.authService.destroyUserCred();
              this.authService.fbLogin(facebookAuth.userID, facebookAuth.accessToken)
                .subscribe((response) => {
                  this.authService.loadSocialCred(cred);
                  this.authService.loadSqlToken()
                    .subscribe((response) => {
                      loader.dismiss(
                        this.navCtrl.setRoot(MainPage)
                      );
                    }, (error) => {
                      loader.dismiss();
                      console.log(error);
                      this.showMsg('Log In Error Token', "Opps it's not you, it's us - try again in a couple minutes.", 'OK');
                    });
                }, (error) => {
                  loader.dismiss();
                  console.log(error);
                  this.showMsg('Log In Error Facebook ', "Opps it's not you, it's us - try again in a couple minutes.", 'OK');
                });
            })
            .catch(e => {
              loader.dismiss();
              console.log('Error Graph API into Facebook', e);
              this.showMsg('Log In Error Graph API', "Opps it's not you, it's us - try again in a couple minutes.", 'OK');
            });
        }
        else if (res.status === 'not_authorized') {
          this.showMsg('Face Error', "Facebook says you are no authorized.", 'OK');
        }
        else {
          this.showMsg('Face Error', "There is a problem connecting to facebook.", 'OK');
        }
      })
      .catch(e => {
        console.log('Error logging into Facebook', e);
        this.showMsg('Face Error', "There is a problem connecting to facebook.", 'OK');
      });
  
  
    */
  }

  showMsg(tittle, msg, button) {
    let alert = this.alertCtrl.create({
      title: tittle,
      subTitle: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }]
    });
    alert.present();
  }


  showErrorMsg(tittle, msg, button) {
    let alert = this.alertCtrl.create({
      title: tittle,
      subTitle: msg,
      buttons: [button]
    });
    alert.present();
  }

  openTerms() {
    this.navCtrl.push(PrivacyPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
}
