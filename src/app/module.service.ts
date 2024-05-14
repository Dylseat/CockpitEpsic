import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Module {
  moduleNumber: string;
  moduleTitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getModules1annes(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/module1annees`);
  }

  getModulesCie1annes(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/moduleCie1annees`);
  }

  getModulesCie2annes(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/moduleCie2annees`);
  }

  getModules2annes(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/module2annees`);
  }

  getModules3annes(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/module3annees`);
  }

  getModulesCie3annes(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/moduleCie3annees`);
  }

  getModules4annes(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/module4annees`);
  }
}
