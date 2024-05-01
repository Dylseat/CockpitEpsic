import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clickable-image-note',
  standalone: true,
  imports: [],
  templateUrl: './clickable-image-note.component.html',
  styleUrl: './clickable-image-note.component.scss'
})
export class ClickableImageComponentNote {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/note']);  
  }
}
