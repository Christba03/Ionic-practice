import { Component, ViewChild, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular'; // Import IonModal from Ionic
import { OverlayEventDetail } from '@ionic/core/components'; // Import OverlayEventDetail for modal dismissal

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html', // Path to your modal page template
  styleUrls: ['./modal.page.scss'], // Path to your modal page style
  standalone: false,
})
export class ModalPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal; // Use @ViewChild to access the modal

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.'; // Example message
  name!: string;

  constructor() {}

  ngOnInit() {}

  // Method to handle modal cancellation
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  // Method to handle modal confirmation
  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  // Event triggered before the modal is dismissed
  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`; // Change message based on confirmation
    }
  }
}
