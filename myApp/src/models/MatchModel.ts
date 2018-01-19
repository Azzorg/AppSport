import { DateTime } from "ionic-angular/components/datetime/datetime";
import { PlayerModel } from './PlayerModel';

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