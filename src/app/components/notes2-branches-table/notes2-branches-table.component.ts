import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BranchesData2Service } from '../.././branches-data2.service';

export interface Grade {
	branche: string;
	notesSemestre1: (number | null)[];
	notesSemestre2: (number | null)[];
	moyenneSemestre1?: number | null;
	moyenneSemestre2?: number | null;
	moyenneAnnuelle?: number | null;
}

@Component({
	selector: 'app-notes2-branches-table',
	standalone: true,
	imports: [MatTableModule, MatInputModule, FormsModule, CommonModule],
	templateUrl: './notes2-branches-table.component.html',
	styleUrls: ['./notes2-branches-table.component.scss']
})

export class Notes2BranchesTableComponent {
	// Colonnes affichées dans le tableau Material
	displayedColumns: string[] = [
		'branche',
		...Array.from({length: 3}, (_, i) => `semestre1-note${i}`),
		'moyenneSemestre1',
		...Array.from({length: 3}, (_, i) => `semestre2-note${i}`),
		'moyenneSemestre2',
		'moyenneAnnuelle'
	];
	
	constructor(private branchesData2Service: BranchesData2Service) {}

	dataSource: Grade[] = [
		{ branche: 'Anglais', notesSemestre1: [null, null, null], notesSemestre2: [null, null, null] },
		{ branche: 'Math', notesSemestre1: [null, null, null], notesSemestre2: [null, null, null] },
		{ branche: 'ECG', notesSemestre1: [null, null, null], notesSemestre2: [null, null, null] }
	];

	// Calcul de la moyenne annuelle pour une branche donnée
	calculateAnnualAverage(grade: Grade) {
		const sem1 = grade.moyenneSemestre1;
		const sem2 = grade.moyenneSemestre2;

		// Calcul de la moyenne annuelle en fonction des moyennes des semestres
		if (sem1 != null && sem2 != null) 
		{
			grade.moyenneAnnuelle = (sem1 + sem2) / 2;
		} 
		else if (sem1 != null) 
		{
			grade.moyenneAnnuelle = sem1; 
		} 
		else if (sem2 != null) 
		{
			grade.moyenneAnnuelle = sem2;
		} 
		else 
		{
			grade.moyenneAnnuelle = null; 
		}
		this.updateAnnualAverages();
	}

	// Mise à jour des moyennes annuelles dans le service de données
	private updateAnnualAverages() {
		const averages = this.dataSource.map(grade => grade.moyenneAnnuelle).filter(moy => moy !== null) as number[];
		this.branchesData2Service.updateAnnualAverages(averages);
	  }

	// Calcul de la moyenne du semestre pour une branche donnée
	calculateSemesterAverage(grade: Grade, semester: number) {
		const notes = semester === 1 ? grade.notesSemestre1 : grade.notesSemestre2;
		// Filtrer et s'assurer que les notes sont des nombres valides
		const validNotes = notes.filter(note => note !== null && typeof note === 'number') as number[];

		// S'assurer qu'il n'y a pas de valeurs null avant de calculer la moyenne
		if (validNotes.length > 0) 
		{
			const total = validNotes.reduce((a, b) => a + b, 0);
			const average = Math.round((total / validNotes.length) * 2) / 2;
			if (semester === 1) 
			{
				grade.moyenneSemestre1 = average;
			}
			else 
			{
				grade.moyenneSemestre2 = average;
			}
		} 
		else 
		{
			if (semester === 1) 
			{
				grade.moyenneSemestre1 = null;
			} 
			else 
			{
				grade.moyenneSemestre2 = null;
			}
		}
		this.calculateAnnualAverage(grade);
	}
}
