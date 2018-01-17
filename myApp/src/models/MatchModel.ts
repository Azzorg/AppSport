import { DateTime } from "ionic-angular/components/datetime/datetime";
import { PlayerModel } from './PlayerModel';
import { Component } from "@angular/core/src/metadata/directives";

@Component({})
export class MatchModel {

    /** Variables */
    id: number;
    date: DateTime;
    teamAdName: string;
    scoreAd: number;
    scoreUs: number;
    isHome: boolean;    //Est ce que l'équipe reçoit
    listPlayer: Array<PlayerModel>;


    constructor() { }
}