import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleData3Service {
  private moduleNotesSource = new BehaviorSubject<number[]>([]);
  currentModuleNotes = this.moduleNotesSource.asObservable();

  constructor() {}

  updateModuleNotes(notes: number[]) {
    this.moduleNotesSource.next(notes);
  }
}
