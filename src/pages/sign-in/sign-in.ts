import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { signUp } from '../../app/signInArray';
import signUpArr from '../../app/signInGlobal';
import { HomePage } from '../home/home';

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
  signUpArr= [];
  userName:string;
  userID:string;
  LastName:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }


  saveData(userName,LastName,userID){
    let obj = new signUp(userName,LastName,userID);
    signUpArr.push(obj);
    console.log(signUpArr);

    if(userName != "" && LastName !="" && userID != "")
    {
      this.navCtrl.push(HomePage)
    }
    else{
     // alert("please try again");
      const alert = this.alertCtrl.create({
        title: 'Unsuccessful!',
        subTitle: 'Please enter your username and ID!',
        buttons: ['OK']
      });
      alert.present();
    }
    }
    
  }

  


