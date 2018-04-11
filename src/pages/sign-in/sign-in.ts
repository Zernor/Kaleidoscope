import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  credentials: { email: string, password: string } = {
    email: 'test17@live.com',
    password: 'Kuna123-'
  };

  forgotPassword: { Email: string } = {
    Email: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public app: App
  ) {}


  fbSignIn() {
    this.app.getRootNav().setRoot(HomePage)
  }

  signIn(credentials) {
    let loader = this.loadingCtrl.create({
      content: 'Authenticating Credentials...'
    });
    loader.present();

    /**
    this.authService.destroyUserCred();
    this.authService.authenticate(credentials)
      .subscribe((response) => {
        this.authService.loadSqlToken().subscribe((response) => {
          setTimeout(() => {
            loader.dismiss(
              this.navCtrl.setRoot(HomePage)
            );
          }, 1000);
        }, (error) => {
          loader.dismiss();
          this.showMsg('Log In Error', "Opps it's not you, it's us - try again in a couple minutes.", 'OK');
        });
      }, (error) => {
        let data: any = JSON.parse(error._body);
        let errorMessage: string = data.error_description;
        loader.dismiss();
        this.showMsg('Log In Error', errorMessage, 'OK');
      });
     */

    loader.dismiss(
      this.app.getRootNav().setRoot(HomePage)
    );
    
  }

  forgotPasswordPrompt() {

    let prompt = this.alertCtrl.create({
      title: 'Forgot Password',
      message: "A link to reset your password will be send to the following email address:",
      inputs: [{
        name: 'email',
        placeholder: 'email@example.com'
      },
      ],
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'Submit',
        handler: data => {
          let loader = this.loadingCtrl.create({
            content: 'Authenticating Credentials...'
          });
          loader.present();


          /**
            this.forgotPassword.Email = data.email;
          this.authService.resetPassword(this.forgotPassword)
            .subscribe((response) => {
              this.showMsg('Password Reset', 'A link to reset your password has been sent to ' + data.email, 'OK');
              console.log(response);
              loader.dismiss();
            }, (error) => {
              let errMsg: any = JSON.parse(error._body);
              this.showMsg('Password Reset Error', errMsg.message, 'OK');
              console.log(error);
              loader.dismiss();
            });
           */ 
          
          this.showMsg('Password Reset', 'A link will be send to the following email address: ' + data.email, 'OK');
          loader.dismiss();
        }
      }
      ]
    });
    prompt.present();
  }

  showMsg(tittle, msg, button) {
    let alert = this.alertCtrl.create({
      title: tittle,
      subTitle: msg,
      buttons: [button]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

}
