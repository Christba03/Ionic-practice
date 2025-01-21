import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalPage } from './modal.page'; // Import ModalPage component

const routes: Routes = [
  {
    path: '',
    component: ModalPage, // Route to ModalPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use child routes for the modal page
  exports: [RouterModule], // Export the RouterModule
})
export class ModalPageRoutingModule {}
