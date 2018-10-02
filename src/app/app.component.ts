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
      {title: 'Atualizar Perfil', component: 'page-edit-profile', icon: 'person'},
      {title: 'Consultar Agenda', component: 'page-search-cars', icon: 'list-box'},
      {title: 'Atendimentos Realizados', component: 'page-search-trips', icon: 'checkmark-circle'},
      {title: 'Pagamentos', component: 'page-search-cars', icon: 'cash'},
      {title: 'Messages', component: 'page-message-list', icon: 'mail'},
      {title: 'Contato', component: 'page-support', icon: 'help-circle'}
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
