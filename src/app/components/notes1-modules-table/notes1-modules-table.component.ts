import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {   
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose, } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-notes1-modules-table',
  standalone: true,
  imports: [
    MatTableModule, 
    DialogComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './notes1-modules-table.component.html',
  styleUrl: './notes1-modules-table.component.scss'
})
export class Notes1ModulesTableComponent {

  constructor(@Inject(ChangeDetectorRef) private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog) { }

  displayedColumns: string[] = ['moduleNumber', 'moduleTitle', 'moduleNote'];
  dataSource: { moduleNumber: string; moduleTitle: string; moduleNote: string; }[] = [];

openDialog(): void {
  const dialogRef = this.dialog.open(DialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.dataSource.push(result);
    }
  });
}

  deleteRow(element: any): void {
    const index = this.dataSource.indexOf(element);
    if (index >= 0) {
      this.dataSource.splice(index, 1);
    }
  }
}

