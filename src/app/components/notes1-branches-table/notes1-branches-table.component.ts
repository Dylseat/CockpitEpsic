import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BranchesDataService } from '../.././branches-data.service';

export interface Grade {
	branche: string;
	notesSemestre1: (number | null)[];
	notesSemestre2: (number | null)[];
	moyenneSemestre1?: number | null;
	moyenneSemestre2?: number | null;
	moyenneAnnuelle?: number | null;
}

@Component({
	selector: 'app-notes1-branches-table',
	standalone: true,
	imports: [MatTableModule, MatInputModule, FormsModule, CommonModule],
	templateUrl: './notes1-branches-table.component.html',
	styleUrls: ['./notes1-branches-table.component.scss']
})
export class Notes1BranchesTableComponent {
	// Colonnes affichées dans le tableau Material
	displayedColumns: string[] = [
		'branche',
		...Array.from({length: 3}, (_, i) => `semestre1-note${i}`),
		'moyenneSemestre1',
		...Array.from({length: 3}, (_, i) => `semestre2-note${i}`),
		'moyenneSemestre2',
		'moyenneAnnuelle'
	];
	
	// Injection du service de gestion des données de branches
	constructor(private branchesDataService: BranchesDataService) {}

	// Données source pour le tableau, initialisées avec des valeurs par défaut
	dataSource: Grade[] = [
		{ branche: 'Anglais', notesSemestre1: [null, null, null], notesSemestre2: [null, null, null] },
		{ branche: 'Math', notesSemestre1: [null, null, null], notesSemestre2: [null, null, null] },
		{ branche: 'ECG', notesSemestre1: [null, null, null], notesSemestre2: [null, null, null] }
	];

	// Calcul de la moyenne annuelle pour une branche donnée
	calculateAnnualAverage(grade: Grade) {
		const sem1 = grade.moyenneSemestre1;
		const sem2 = grade.moyenneSemestre2;

		if (sem1 != null && sem2 != null) {
			grade.moyenneAnnuelle = (sem1 + sem2) / 2;
		} else if (sem1 != null) {
			grade.moyenneAnnuelle = sem1;
		} else if (sem2 != null) {
			grade.moyenneAnnuelle = sem2;
		} else {
			grade.moyenneAnnuelle = null;
		}
		this.updateAnnualAverages();
	}

	// Mise à jour des moyennes annuelles dans le service de données
	private updateAnnualAverages() {
		const averages = this.dataSource.map(grade => grade.moyenneAnnuelle).filter(moy => moy !== null) as number[];
		this.branchesDataService.updateAnnualAverages(averages);
	}

	// Calcul de la moyenne pour un semestre donné
	calculateSemesterAverage(grade: Grade, semester: number) {
		const notes = semester === 1 ? grade.notesSemestre1 : grade.notesSemestre2;
		const validNotes = notes.filter(note => note !== null && typeof note === 'number') as number[];

		if (validNotes.length > 0) {
			const total = validNotes.reduce((a, b) => a + b, 0);
			const average = Math.round((total / validNotes.length) * 2) / 2;  // Arrondi à 0.5
			if (semester === 1) {
				grade.moyenneSemestre1 = average;
			} else {
				grade.moyenneSemestre2 = average;
			}
		} else {
			if (semester === 1) {
				grade.moyenneSemestre1 = null;
			} else {
				grade.moyenneSemestre2 = null;
			}
		}
		this.calculateAnnualAverage(grade);
	}
}
