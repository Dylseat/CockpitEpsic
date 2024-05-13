import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Notes1BranchesTableComponent } from '../notes1-branches-table/notes1-branches-table.component';
import { Notes1ModulesTableComponent } from '../notes1-modules-table/notes1-modules-table.component';
import { Notes1CieTableComponent } from '../notes1-cie-table/notes1-cie-table.component'
import { Notes1AverageTableComponent } from '../notes1-average-table/notes1-average-table.component'


@Component({
	selector: 'app-note-page',
	standalone: true,
	imports: [HeaderComponent, MatTabsModule, Notes1BranchesTableComponent, Notes1ModulesTableComponent, Notes1CieTableComponent, Notes1AverageTableComponent],
	templateUrl: './note-page.component.html',
	styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent {
	
}
