import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ModuleService } from '../../module.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog3',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatDialogModule, MatInputModule, MatSelectModule, CommonModule],
  templateUrl: './dialog3.component.html',
  styleUrls: ['./dialog3.component.scss'],
  providers: [ModuleService]
})
export class Dialog3Component implements OnInit{
  dataModule = {moduleNumber: '', moduleTitle: '', moduleNote: ''};
  modules: any[] = []; // Variable pour stocker les modules récupérés
  selectedModule: any = null; // Variable pour stocker le module sélectionné par l'utilisateur

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,private dialogRef: MatDialogRef<Dialog3Component>, private moduleService: ModuleService,) {}

  ngOnInit(): void {
    // Appelez la méthode du service pour récupérer les modules
    this.moduleService.getModules3annes().subscribe(modules => {
      this.modules = modules; // Stockez les modules récupérés
    });

    // Vérifiez s'il existe des données pré-remplies
    if (this.data) 
    {
      this.dataModule = this.data;
    }
  }

  onSave(): void {
    // Vérifiez si un module est sélectionnés et si une note est saisie
    if (this.selectedModule && this.dataModule.moduleNote) 
    {
      // Création d'un nouvel objet pour représenter l'entrée dans dataSource
      const newEntry = {
        moduleNumber: this.selectedModule.number,
        moduleTitle: this.selectedModule.title,
        moduleNote: this.dataModule.moduleNote
      };
      // Enregistrez la note associée au module sélectionné
      console.log('Module sélectionné :', newEntry);
      console.log('Note :', this.dataModule.moduleNote);

      // Fermez la boîte de dialogue et renvoyez les données
      this.dialogRef.close(newEntry);
    } 
    else 
    {
      // Affichez un message d'erreur ou demandez à l'utilisateur de sélectionner un module
      console.error('Aucun module sélectionné');
    }
  }
  
  CloseDialog(): void {
    this.dialogRef.close();
  }
}