import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component'; 
import { NotePageComponent } from './components/note-page/note-page.component'; 
import { PageHoraireComponent } from './components/page-horaire/page-horaire.component';

export const routes: Routes = [ 
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige l'URL de base vers /login
    { path: 'login', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'horaire', component: PageHoraireComponent },
    { path: 'note', component: NotePageComponent }
];
