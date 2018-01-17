import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/* Pages */ 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

/* Models */
import { PlayerModel } from '../models/PlayerModel';
import { MatchModel } from '../models/MatchModel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParserbddProvider } from '../providers/parserbdd/parserbdd';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PlayerModel,
    MatchModel
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PlayerModel,
    MatchModel
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ParserbddProvider
  ]
})
export class AppModule { }
