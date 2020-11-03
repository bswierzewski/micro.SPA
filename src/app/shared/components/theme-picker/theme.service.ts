import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Theme } from './theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<string>('purple-green');
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

  setTheme(themeToSet): void {
    this.setStyle('theme', `assets/themes/${themeToSet}.css`);
    localStorage.setItem('theme', themeToSet);
    this.currentTheme.next(themeToSet);
  }

  setStyle(key: string, href: string): void {
    getLinkElementForKey(key).setAttribute('href', href);
  }

  removeStyle(key: string): void {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getLinkElementForKey(key: string): any {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string): any {
  return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}

function createLinkElementWithKey(key: string): any {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string): any {
  return `app-${key}`;
}
