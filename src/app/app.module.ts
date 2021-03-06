import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { HomePage } from '../pages/home/home';
import { PrivacyPage } from '../pages/privacy/privacy';
import { MapMarkerPage } from '../pages/map-marker/map-marker';
import { MorePage } from '../pages/more/more';

@NgModule({
  declarations: [
    MyApp,
    AuthenticationPage,
    HomePage,
    PrivacyPage,
    MapMarkerPage,
    MorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthenticationPage,
    HomePage,
    PrivacyPage,
    MapMarkerPage,
    MorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
