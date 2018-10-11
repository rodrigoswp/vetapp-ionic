import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {CalendarModule} from "ion2-calendar"
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ReactiveFormsModule } from '@angular/forms';

import {HotelService} from "../providers/hotel-service";
import {PlaceService} from "../providers/place-service";
import {ActivityService} from "../providers/activity-service";
import {CarService} from "../providers/car-service";
import {TripService} from "../providers/trip-service";
import { WeatherProvider } from '../providers/weather';
import { MessageService } from '../providers/message-service-mock';

import {ionBookingApp} from "./app.component";
import { UsersProvider } from '../providers/users/users';


@NgModule({
  declarations: [
    ionBookingApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    IonicModule.forRoot(
      ionBookingApp,
      {
        preloadModules: true,
        iconMode: 'md',
        mode: 'md'
      }
    ),
    IonicStorageModule.forRoot({
      name: '__ionBookingDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ionBookingApp
  ],
  providers: [
    HotelService,
    PlaceService,
    ActivityService,
    CarService,
    TripService,
    CarService,
    TripService,
    MessageService,
    WeatherProvider,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsersProvider
  ]
})

export class AppModule {
}
