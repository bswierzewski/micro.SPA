import { Component } from '@angular/core';
import { ThemeService } from './shared/components/theme-picker/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
}
