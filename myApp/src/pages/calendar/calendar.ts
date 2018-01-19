import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchModel } from '../../models/MatchModel';
import { NewMatchPage } from '../../pages/new-match/new-match';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  matchList: Array<MatchModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  /** Va sur la page de création d'un nouveau match */
  addNewMatchOnClick() {
    this.navCtrl.push(NewMatchPage);
  }

}
