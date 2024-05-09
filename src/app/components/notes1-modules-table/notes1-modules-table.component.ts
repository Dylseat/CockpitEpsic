import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notes1-modules-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './notes1-modules-table.component.html',
  styleUrl: './notes1-modules-table.component.scss'
})
export class Notes1ModulesTableComponent {
  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['moduleNumber', 'moduleTitle', 'moduleNote'];
  dataSource: { moduleNumber: ''; moduleTitle: ''; moduleNote: ''; }[] = [];

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { moduleNumber: '', moduleTitle: '', moduleNote: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) 
      {
        console.log('données reçu', result);
        this.dataSource.push(result);
        this.dataSource = [...this.dataSource];
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

