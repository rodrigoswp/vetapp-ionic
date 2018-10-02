import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";


export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class ionBookingApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "page-login";
  showMenu: boolean = true;
  // rootNavCtrl: NavController;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: 'page-home', icon: 'home'},
      {title: 'Messages', component: 'page-message-list', icon: 'mail'},
      {title: 'test Weather', component: 'page-local-weather', icon: 'sunny'},
      {title: 'Rent a Car', component: 'page-search-cars', icon: 'car'},
      {title: 'Trip Activities', component: 'page-search-trips', icon: 'beer'},
      {title: 'Favorites', component: 'page-favorite-list', icon: 'heart'},
      {title: 'Booking List', component: 'page-booking-list', icon: 'briefcase'},
      {title: 'Support', component: 'page-support', icon: 'help-buoy'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot('page-login');
  }

  editProfile() {
    this.nav.setRoot('page-edit-profile');
  }

}
