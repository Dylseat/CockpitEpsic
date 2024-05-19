import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogCie2Component } from '../dialog-cie2/dialog-cie2.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CieData2Service } from '../.././cie-data2.service';


@Component({
  selector: 'app-notes2-cie-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule,],
  templateUrl: './notes2-cie-table.component.html',
  styleUrl: './notes2-cie-table.component.scss'
})
export class Notes2CieTableComponent {
  constructor(public dialog: MatDialog, private cieData2Service: CieData2Service) { }

  displayedColumns: string[] = ['moduleNumber', 'moduleTitle', 'moduleNote', 'delete'];
  dataSource: { moduleNumber: ''; moduleTitle: ''; moduleNote: ''; }[] = [];

  // Ouvre une boîte de dialogue pour ajouter un module
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCie2Component, {
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

  // Supprime une ligne du tableau
  deleteRow(element: any): void {
    const index = this.dataSource.indexOf(element);
    if (index >= 0) {
      this.dataSource.splice(index, 1);
      this.dataSource = [...this.dataSource];
      this.updateCieNotes();
    }
  }

  // Met à jour les notes dans le service en convertissant les valeurs en nombre
  private updateCieNotes(): void {
    const notes = this.dataSource.map(module => Number(module.moduleNote));
    this.cieData2Service.updateCieNotes(notes);
  }
}