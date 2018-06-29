import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentUser: any;

  constructor(
    public navCtrl: NavController,
    private event: Events

  ) {
    this.event.subscribe('userLoggedIn?', (user) => {
      this.currentUser = user;
    })
  }
}
