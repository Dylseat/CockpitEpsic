import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {HeaderComponent} from '../header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-horaire',
  standalone: true,
  imports: [MatIconModule, HeaderComponent],
  templateUrl: './page-horaire.component.html',
  styleUrl: './page-horaire.component.scss'
})
export class PageHoraireComponent {
  @ViewChild('horaireImage') horaireImage: any; // Accéder à l'élément <img>
  
  constructor(private _snackBar: MatSnackBar) {}

  // Méthode pour télécharger l'horaire
  download() {
    const link = document.createElement('a');
    link.href = this.horaireImage.nativeElement.src;
    link.download = 'horaire_epsic_cockpit.png';
    link.click();

    this._snackBar.open('Horaire téléchargé avec succès', 'Fermer', {
      duration: 2000,
    });
  }

  // Méthode pour imprimer l'horaire
  print() {
    const imageUrl = this.horaireImage.nativeElement.src;
    const printWindow = window.open('about:blank', '', 'height=600,width=800');
    if (printWindow !== null) {
        printWindow.document.write('<html><head><title>Impression</title></head><body>');
        printWindow.document.write(`<img src="${imageUrl}" alt="Horaire">`);
        printWindow.document.write('</body></html>');
        printWindow.document.close();

        printWindow.addEventListener('load', () => {
          setTimeout(() => {
              printWindow.print();
              setTimeout(() => {
                  printWindow.close();
              }, 100);
          }, 100); 
      }); 
    } 
    else 
    {
        console.error('La fenêtre d\'impression n\'a pas pu être ouverte.');
    }
}


}
