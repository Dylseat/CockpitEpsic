import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ModuleData3Service } from '../.././module-data3.service';
import { BranchesData3Service } from '../.././branches-data3.service';
import { CieData3Service } from '../.././cie-data3.service';

@Component({
  selector: 'app-notes3-average-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './notes3-average-table.component.html',
  styleUrl: './notes3-average-table.component.scss'
})

export class Notes3AverageTableComponent implements OnInit {
  averages = [
    { category: 'Branches scolaires', value: 0 },
    { category: 'Modules', value: 0 },  
    { category: 'Modules inter-entreprise', value: 0 },
    { category: 'Année', value: 0 }
  ];

  constructor(private moduleDataService: ModuleData3Service, private branchesDataService: BranchesData3Service,private cieDataService: CieData3Service) {}

  ngOnInit() {
    this.branchesDataService.currentAnnualAverages.subscribe(averages => {
      this.averages[0].value = this.calculateAverageBranches(averages);
      this.averages[0].value = this.calculateAverage(averages); 
      this.updateAnnualAverage();
    this.moduleDataService.currentModuleNotes.subscribe(notes => {
      this.averages[1].value = this.calculateAverageModules(notes);
      this.averages[1].value = this.calculateAverage(notes);
      this.updateAnnualAverage();
    this.cieDataService.currentCieNotes.subscribe(notes => {
      this.averages[2].value = this.calculateAverageCie(notes);
      this.averages[2].value = this.calculateAverage(notes);
      this.updateAnnualAverage();
      });
    });
    });
  }

  private calculateAverageCie(notes: number[]): number {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return parseFloat((sum / notes.length).toFixed(2));
  }

  private calculateAverageModules(notes: number[]): number {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return parseFloat((sum / notes.length).toFixed(2));
  }

  private calculateAverageBranches(averages: number[]): number {
    if (averages.length > 0) {
      const sum = averages.reduce((a, b) => a + b, 0);
      const average = sum / averages.length;
      return Number(average.toFixed(1)); 
    }
    return 0;
  }

  private calculateAverage(values: number[]): number {
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, value) => acc + value, 0);
    return parseFloat((sum / values.length).toFixed(2));
  }
  
  private updateAnnualAverage(): void {
    const validAverages = this.averages.slice(0, 3).map(a => a.value).filter(v => v > 0);
    if (validAverages.length > 0) {
      const sum = validAverages.reduce((a, b) => a + b, 0);
      this.averages[3].value = parseFloat((sum / validAverages.length).toFixed(1));  // Arrondi à une décimale
    } else {
      this.averages[3].value = 0;
    }
  }
}