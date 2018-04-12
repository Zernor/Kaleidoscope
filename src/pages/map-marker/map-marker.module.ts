import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapMarkerPage } from './map-marker';

@NgModule({
  declarations: [
    MapMarkerPage,
  ],
  imports: [
    IonicPageModule.forChild(MapMarkerPage),
  ],
})
export class MapMarkerPageModule {}
