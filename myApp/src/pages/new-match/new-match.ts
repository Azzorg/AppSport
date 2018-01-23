import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchModel } from '../../models/MatchModel';

/**
 * Generated class for the NewMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-match',
  templateUrl: 'new-match.html',
})
export class NewMatchPage {

  match: MatchModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = new MatchModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewMatchPage');
  }

  createMatch(){
    console.log("Match", this.match);
  }
}
