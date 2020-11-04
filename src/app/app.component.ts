import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './shared/components/theme-picker/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class') componentCssClass;

  constructor(public overlayContainer: OverlayContainer, private themeService: ThemeService) {
    themeService.currentTheme$.subscribe((theme) => {
      this.overlayContainer.getContainerElement().classList.add(theme);
      this.componentCssClass = theme;
    });
  }
}
