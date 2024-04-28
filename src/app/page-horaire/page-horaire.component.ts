import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-page-horaire',
  standalone: true,
  imports: [MatIconModule, HeaderComponent],
  templateUrl: './page-horaire.component.html',
  styleUrl: './page-horaire.component.scss'
})
export class PageHoraireComponent {

}
