import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CieData2Service {
  private cieNotesSource = new BehaviorSubject<number[]>([]);
  currentCieNotes = this.cieNotesSource.asObservable();

  constructor() {}

  updateCieNotes(notes: number[]) {
    this.cieNotesSource.next(notes);
  }
}