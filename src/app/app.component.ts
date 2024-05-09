import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    providers: [HttpClient],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'CockpitEpsic';
}
