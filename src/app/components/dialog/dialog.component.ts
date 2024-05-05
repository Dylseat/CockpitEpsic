import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatDialogModule, MatInputModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  dataModule = {moduleNumber: '', moduleTitle: '', moduleNote: ''};

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,private dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
    if (this.data)
      {
        this.dataModule = this.data;
      }
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }
}