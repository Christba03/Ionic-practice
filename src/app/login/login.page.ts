import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email:string;
  password:string;

  constructor(
    private navController: NavController,
    private ToastController: ToastController,
  ) { 
    this.password='';
    this.email='';
  }

  ngOnInit() {
  }
  onClickLogin() {
    if(this.email ==='christba@gmail.com' 
      && this.password === 'admin'){
        console.log('login');
        this.navController.navigateRoot('/inicio');
      }
      else{
        this.presentToast('bottom');
      }


  }
  async presentToast(position: 'bottom') {
    
    const toast = await this.ToastController.create({
      message: 'Credenciales incorrectas',
      duration: 3000,
      position: 'bottom',
      cssClass: 'toast-red',
    });

    await toast.present();
  }

}
