import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {Notes1BranchesTableComponent} from '../notes1-branches-table/notes1-branches-table.component';


@Component({
  selector: 'app-note-page',
  standalone: true,
  imports: [HeaderComponent, MatTabsModule, Notes1BranchesTableComponent],
  templateUrl: './note-page.component.html',
  styleUrl: './note-page.component.scss'
})
export class NotePageComponent {

}
