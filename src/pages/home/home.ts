import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { signUp } from '../../app/signInArray';
import signUpArr from '../../app/signInGlobal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name = signUpArr[0].userName;
  last = signUpArr[0].LastName;
  id = signUpArr[0].userID;


  constructor(public navCtrl: NavController) {

  }

}
