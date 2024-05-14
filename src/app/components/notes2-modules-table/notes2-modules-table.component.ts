import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModuleData2Service } from '../.././module-data2.service'


@Component({
  selector: 'app-notes2-modules-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './notes2-modules-table.component.html',
  styleUrl: './notes2-modules-table.component.scss'
})
export class Notes2ModulesTableComponent {
  constructor(public dialog: MatDialog, private moduleData2Service: ModuleData2Service) {}
  displayedColumns: string[] = ['moduleNumber', 'moduleTitle', 'moduleNote', 'delete'];
  dataSource: { moduleNumber: ''; moduleTitle: ''; moduleNote: ''; }[] = [];

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog2Component, {
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

  private updateModuleNotes(): void {
    // Convertir chaque moduleNote en nombre avant de passer au service
    const notes = this.dataSource.map(module => Number(module.moduleNote));
    this.moduleData2Service.updateModuleNotes(notes);
  }

}