import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Theme } from './theme.model';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
})
export class ThemePickerComponent implements OnInit {
  theme: Observable<string>;
  themes: Theme[];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme$;

    this.themeService
      .getThemes()
      .pipe(take(1))
      .subscribe((themes) => {
        this.themes = themes;
      });
  }

  changeTheme(themeToSet): void {
    this.themeService.setTheme(themeToSet);
  }
}
