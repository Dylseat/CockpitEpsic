import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component'; // Importez votre HomePageComponent


export const routes: Routes = [ 
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige l'URL de base vers /login
    { path: 'login', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent } // Ajoutez cette ligne pour la page d'accueil
];
