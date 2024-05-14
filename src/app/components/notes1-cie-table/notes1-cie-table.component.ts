import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogCieComponent } from '../dialog-cie/dialog-cie.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CieDataService } from '../.././cie-data.service';


@Component({
  selector: 'app-notes1-cie-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule,],
  templateUrl: './notes1-cie-table.component.html',
  styleUrl: './notes1-cie-table.component.scss'
})
export class Notes1CieTableComponent {
  constructor(public dialog: MatDialog, private cieDataService: CieDataService) { }

  displayedColumns: string[] = ['moduleNumber', 'moduleTitle', 'moduleNote', 'delete'];
  dataSource: { moduleNumber: ''; moduleTitle: ''; moduleNote: ''; }[] = [];

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCieComponent, {
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
    this.cieDataService.updateCieNotes(notes);
  }
}