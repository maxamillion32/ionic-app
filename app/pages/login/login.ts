import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';
import * as firebase from 'firebase';


@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      firebase.auth().signInWithEmailAndPassword(this.login.username, this.login.password)
        .then((_auth) => {
          this.navCtrl.push(TabsPage);
        })
        .catch((error: firebase.auth.Error) => {
          console.log(error);
        })
      // this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  onLoginWithGoogle() {
    
  }

  onLoginWithFacebook() {

  }
}
