import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogCie3Component } from '../dialog-cie3/dialog-cie3.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CieData3Service } from '../.././cie-data3.service';


@Component({
  selector: 'app-notes3-cie-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule,],
  templateUrl: './notes3-cie-table.component.html',
  styleUrl: './notes3-cie-table.component.scss'
})
export class Notes3CieTableComponent {
  constructor(public dialog: MatDialog, private cieData3Service: CieData3Service) { }

  displayedColumns: string[] = ['moduleNumber', 'moduleTitle', 'moduleNote', 'delete'];
  dataSource: { moduleNumber: ''; moduleTitle: ''; moduleNote: ''; }[] = [];

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCie3Component, {
      data: { moduleNumber: '', moduleTitle: '', moduleNote: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) 
      {
        this.dataSource.push(result);
        this.dataSource = [...this.dataSource];
        this.updateCieNotes();
      }
    });
  }

  deleteRow(element: any): void {
    const index = this.dataSource.indexOf(element);
    if (index >= 0) {
      this.dataSource.splice(index, 1);
      this.dataSource = [...this.dataSource];
      this.updateCieNotes();
    }
  }

  private updateCieNotes(): void {
    const notes = this.dataSource.map(module => Number(module.moduleNote));
    this.cieData3Service.updateCieNotes(notes);
  }
}