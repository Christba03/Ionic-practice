import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPageRoutingModule } from './modal-routing.module'; // Import routing module
import { ModalPage } from './modal.page'; // Import the ModalPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule, // Import routing module for modal page
  ],
  declarations: [ModalPage], // Declare ModalPage here
})
export class ModalPageModule {}
