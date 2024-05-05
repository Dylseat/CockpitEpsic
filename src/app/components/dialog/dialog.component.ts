import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  data = {moduleNumber: '', moduleTitle: '', moduleNote: ''};

  constructor(public dialogRef: MatDialogRef<DialogComponent>, public dialog: MatDialog, public action: MatDialogActions) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
