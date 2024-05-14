import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Notes1BranchesTableComponent } from '../notes1-branches-table/notes1-branches-table.component';
import { Notes2BranchesTableComponent } from '../notes2-branches-table/notes2-branches-table.component';
import { Notes3BranchesTableComponent } from '../notes3-branches-table/notes3-branches-table.component';
import { Notes4BranchesTableComponent } from '../notes4-branches-table/notes4-branches-table.component';
import { Notes1ModulesTableComponent } from '../notes1-modules-table/notes1-modules-table.component';
import { Notes2ModulesTableComponent } from '../notes2-modules-table/notes2-modules-table.component';
import { Notes3ModulesTableComponent } from '../notes3-modules-table/notes3-modules-table.component';
import { Notes4ModulesTableComponent } from '../notes4-modules-table/notes4-modules-table.component';
import { Notes1CieTableComponent } from '../notes1-cie-table/notes1-cie-table.component';
import { Notes2CieTableComponent } from '../notes2-cie-table/notes2-cie-table.component';
import { Notes3CieTableComponent } from '../notes3-cie-table/notes3-cie-table.component';
import { Notes1AverageTableComponent } from '../notes1-average-table/notes1-average-table.component';
import { Notes2AverageTableComponent } from '../notes2-average-table/notes2-average-table.component';
import { Notes3AverageTableComponent } from '../notes3-average-table/notes3-average-table.component';
import { Notes4AverageTableComponent } from '../notes4-average-table/notes4-average-table.component';

@Component({
	selector: 'app-note-page',
	standalone: true,
	imports: [HeaderComponent, MatTabsModule, Notes1BranchesTableComponent, Notes1ModulesTableComponent, Notes1CieTableComponent, Notes1AverageTableComponent, Notes2BranchesTableComponent, Notes2ModulesTableComponent, Notes2CieTableComponent, Notes2AverageTableComponent, Notes3BranchesTableComponent, Notes3ModulesTableComponent, Notes3CieTableComponent, Notes3AverageTableComponent, Notes4BranchesTableComponent, Notes4ModulesTableComponent, Notes4AverageTableComponent],
	templateUrl: './note-page.component.html',
	styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent {
	
}
