import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';

/** Redux */
import { counterReducer } from './functions/counter';

/** Components */
import { AppComponent } from './app.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';

/** Firebase */
export const firebaseConfig = {
  apiKey: "AIzaSyAjFjH5lRHdnDELUmU4a4FurfPh5dCLArM",
  authDomain: "mineriapolitica.firebaseapp.com",
  databaseURL: "https://mineriapolitica.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "638115189080"
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterializeModule.forRoot(),
    StoreModule.provideStore(
      { counter: counterReducer }
    ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
