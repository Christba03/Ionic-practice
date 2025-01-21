import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  email:string;
  password:string;
  name:string;
  constructor(
        private navController: NavController,
        private ToastController: ToastController,
  ) { 
    this.password='';
    this.email='';
    this.name='';
  }

  ngOnInit() {
  }
  onClickRegister() {
    if(this.email !='' 
      && this.password != '' 
      && this.name != ''){
        console.log('register');
        this.navController.navigateRoot('/login');
      }else {
        this.presentToast('bottom');
      }
  } 
  async presentToast(position: 'bottom') {
    const toast = await this.ToastController.create({
      message: 'Complete los campos',
      duration: 3000,
      position: 'bottom',
    });
}
}
