import {UsersProvider } from './../../providers/users/users';
import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {IonicPage, NavController, MenuController, ToastController} from "ionic-angular";
//import { BrMaskerIonic3, BrMaskModel } from 'brmasker-ionic-3';

@IonicPage({
  name: 'page-register',
  segment: 'register',
  priority: 'high'
})

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;
  //public string fullName: this.onRegisterForm.controls['email'].value;
  model: User;


  constructor(private _fb: FormBuilder, public nav: NavController, public menu: MenuController, private toast: ToastController, private userProvider: UsersProvider ){
    this.menu.swipeEnable(false);
    this.menu.enable(false);


    this.model = new User();
    this.model.email = 'sydney@fife';
    this.model.password = 'pistol';
  }

  ngOnInit() {
    this.onRegisterForm = this._fb.group({
      fullName: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      celphone: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  //model.fullName: string = "";
  //model.email: string = "";

  // register and go to home page
  register() {
    //this.nav.setRoot('page-home');

    this.userProvider.createAccount(this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.nav.pop();
        this.nav.setRoot('page-home')
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  // go to login page
  login() {
    this.nav.setRoot('page-login');
  }
}
export class User {
  email: string;
  password: string;
}
