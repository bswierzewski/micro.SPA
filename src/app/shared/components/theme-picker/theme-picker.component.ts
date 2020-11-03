import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Theme } from './theme.model';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
})
export class ThemePickerComponent implements OnInit {
  themes: Theme[];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService
      .getThemeOptions()
      .pipe(take(1))
      .subscribe((themes) => {
        this.themes = themes;
      });
  }

  changeTheme(themeToSet): void {
    this.themeService.setTheme(themeToSet);
  }
}
