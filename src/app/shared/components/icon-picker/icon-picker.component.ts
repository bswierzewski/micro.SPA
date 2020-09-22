import { Component, EventEmitter, Output } from '@angular/core';
import { Icons } from './icons';

@Component({
  selector: 'app-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss'],
})
export class IconPickerComponent {
  @Output()
  selectedIcon: EventEmitter<string> = new EventEmitter<string>();

  isShow = false;
  icons: string[] = Icons;

  constructor() {}

  setIcon(icon: string): void {
    this.isShow = false;
    this.selectedIcon.emit(icon);
  }
}
