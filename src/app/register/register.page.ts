import { NgForm } from '@angular/forms';
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
  confirmPassword:string;
  phone:string;
  constructor(
        private navController: NavController,
  ) { 
    this.password='';
    this.email='';
    this.name='';
    this.confirmPassword='';
    this.phone='';
  }

  ngOnInit() {
  }
  register(form:NgForm) {
    console.log(form.value);
    console.log(form.valid);
    console.log(form.invalid);
    if (form.valid){
      this.navController.navigateBack('/login');
    }
  }


}
