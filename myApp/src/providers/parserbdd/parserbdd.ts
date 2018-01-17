import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Parse } from 'parse';
import { MatchModel } from '../../models/MatchModel';

/*
  Generated class for the ParserbddProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParserbddProvider {
  
  private parseServerUrl: string = "https://parseapi.back4app.com/";

  
  constructor(public http: Http) {
    this.parseInitialize();
  }

  /** Connection to the database on back4app */
  parseInitialize(){
    Parse.initialize("McmETUqEU6DLMm2Hi6S40bzHNBfijpY2ikXA7lKa","bFDRQlemP2hhMAOQtwOYe86E9RWyVKBOwtcmpyRw");
    Parse.serverURL = this.parseServerUrl;
    console.log(" ///////////// Connecté à la base de donnée ");
  }



  ///   Match   ///

  /** Insert a new match in the database */
  addMatch(newMatch){
    const MatchBdd = Parse.Object.extend("Match");
    let match = new MatchBdd();

    match.id = newMatch.id;

    console.log(" ////// Macth saved");

    match.save();
  }

}
