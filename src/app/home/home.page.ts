import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}
  
  ngOnInit() {
    let numero=0;
    console.log('Hola mundo');
    console.log('Hola mundo 123');
    console.log('Hola mundo ayuda');
  }
  

}
