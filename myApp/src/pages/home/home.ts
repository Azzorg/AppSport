import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatchModel } from '../../models/MatchModel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  match: MatchModel;

  constructor(public navCtrl: NavController) {
    console.log("Début");
  }



}
