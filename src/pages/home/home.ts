import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token-ionic3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public tokenService: Angular2TokenService
  ) {
  }

}
