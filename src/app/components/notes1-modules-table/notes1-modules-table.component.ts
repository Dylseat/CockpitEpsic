import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModuleDataService } from '../.././module-data.service'


@Component({
  selector: 'app-notes1-modules-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './notes1-modules-table.component.html',
  styleUrl: './notes1-modules-table.component.scss'
})
export class Notes1ModulesTableComponent {
  constructor(public dialog: MatDialog, private moduleDataService: ModuleDataService) {}
  displayedColumns: string[] = ['moduleNumber', 'moduleTitle', 'moduleNote', 'delete'];
  dataSource: { moduleNumber: ''; moduleTitle: ''; moduleNote: ''; }[] = [];

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { moduleNumber: '', moduleTitle: '', moduleNote: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) 
      {
        result.moduleNote = Number(result.moduleNote);
        this.dataSource.push(result);
        this.dataSource = [...this.dataSource];
        this.updateModuleNotes();
      }
    });
  }

  deleteRow(element: any): void {
    const index = this.dataSource.indexOf(element);
    if (index >= 0) {
      this.dataSource.splice(index, 1);
      this.dataSource = [...this.dataSource];
      this.updateModuleNotes();
    }
  }

  // Met à jour les notes dans le service en convertissant les valeurs en nombre
  private updateModuleNotes(): void {
    const notes = this.dataSource.map(module => Number(module.moduleNote));
    this.moduleDataService.updateModuleNotes(notes); // Envoie les notes mises à jour au service
  }

}