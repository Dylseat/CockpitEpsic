import { Component } from '@angular/core';
import { MatDialogRef, MatDialogActions } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatDialogActions, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  data = {moduleNumber: '', moduleTitle: '', moduleNote: ''};

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}