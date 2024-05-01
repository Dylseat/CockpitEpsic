import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-note-page',
  standalone: true,
  imports: [HeaderComponent, MatTabsModule],
  templateUrl: './note-page.component.html',
  styleUrl: './note-page.component.scss'
})
export class NotePageComponent {

}
