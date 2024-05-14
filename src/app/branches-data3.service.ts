import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchesData3Service {
  private annualAverageSource = new BehaviorSubject<number[]>([]);
  currentAnnualAverages = this.annualAverageSource.asObservable();

  constructor() {}

  updateAnnualAverages(averages: number[]) {
    this.annualAverageSource.next(averages);
  }
}
