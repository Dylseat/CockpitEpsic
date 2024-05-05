import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-notes1-modules-table',
  standalone: true,
  imports: [MatTableModule, DialogComponent],
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

