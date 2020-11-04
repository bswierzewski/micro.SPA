import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Theme } from './theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<string>(null);
  currentTheme$ = this.currentTheme.asObservable();

  constructor(private http: HttpClient) {
    this.getCurrentTheme();
  }

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>('assets/themes.json');
  }

  getCurrentTheme(): void {
    let theme = localStorage.getItem('theme');
    if (theme) {
      this.setTheme(theme);
    } else {
      this.getThemes()
        .pipe(take(1))
        .subscribe((themes) => {
          theme = themes[0].value;
          this.setTheme(theme);
        });
    }
    this.currentTheme.next(theme);
  }

  setTheme(theme): void {
    localStorage.setItem('theme', theme);
    this.currentTheme.next(theme);
  }
}
