import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-Login',
  templateUrl: './header-Login.component.html',
  styleUrls: ['./header-Login.component.scss'],
  imports: [MatToolbarModule],
  standalone: true
})

export class HeaderComponent {
}