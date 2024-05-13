import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleDataService {
  private moduleNotesSource = new BehaviorSubject<number[]>([]);
  currentModuleNotes = this.moduleNotesSource.asObservable();

  constructor() {}

  updateModuleNotes(notes: number[]) {
    this.moduleNotesSource.next(notes);
  }
}
