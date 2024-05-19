import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ModuleDataService } from '../.././module-data.service';
import { BranchesDataService } from '../.././branches-data.service';
import { CieDataService } from '../.././cie-data.service';

@Component({
  selector: 'app-notes1-average-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './notes1-average-table.component.html',
  styleUrls: ['./notes1-average-table.component.scss']
})

export class Notes1AverageTableComponent implements OnInit {
  averages = [
    { category: 'Branches scolaires', value: 0 },
    { category: 'Modules', value: 0 },  
    { category: 'Modules inter-entreprise', value: 0 },
    { category: 'Année', value: 0 }
  ];

  // Le constructeur injecte les services qui gèrent les données pour les branches, modules et modules CIE
  constructor(private moduleDataService: ModuleDataService, private branchesDataService: BranchesDataService, private cieDataService: CieDataService) {}

  ngOnInit() {
    // S'abonne aux changements dans les moyennes annuelles des branches
    this.branchesDataService.currentAnnualAverages.subscribe(averages => {
      this.averages[0].value = this.calculateAverage(averages);
      this.updateAnnualAverage();
    });

    // S'abonne aux changements dans les notes pour les modules
    this.moduleDataService.currentModuleNotes.subscribe(notes => {
      this.averages[1].value = this.calculateAverage(notes);
      this.updateAnnualAverage();
    });

    // S'abonne aux changements dans les notes pour les modules CIE
    this.cieDataService.currentCieNotes.subscribe(notes => {
      this.averages[2].value = this.calculateAverage(notes);
      this.updateAnnualAverage();
    });
  }

  // Méthode pour calculer la moyenne de n'importe quel ensemble de valeurs
  private calculateAverage(values: number[]): number {
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, value) => acc + value, 0);
    return parseFloat((sum / values.length).toFixed(2));
  }
  
  // Met à jour la moyenne annuelle en fonction des trois moyennes de catégorie
  private updateAnnualAverage(): void {
    const validAverages = this.averages.slice(0, 3).map(a => a.value).filter(v => v > 0);
    if (validAverages.length > 0) {
      const sum = validAverages.reduce((a, b) => a + b, 0);
      this.averages[3].value = parseFloat((sum / validAverages.length).toFixed(1)); 
    } else {
      this.averages[3].value = 0;
    }
  }
}
