import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clickable-image-horaire',
  standalone: true,
  imports: [],
  templateUrl: './clickable-image-horaire.component.html',
  styleUrl: './clickable-image-horaire.component.scss'
})
export class ClickableImageComponentHoraire {

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/home']);  // A CHANGER AVEC LA PAGE HORAIRE !!!
  }
}
