import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ClickableImageComponentHoraire } from '../clickable-image-horaire/clickable-image-horaire.component';
import { ClickableImageComponentNote } from '../clickable-image-note/clickable-image-note.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, ClickableImageComponentHoraire, ClickableImageComponentNote],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
