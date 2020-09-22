import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icons } from './icons';

@Component({
  selector: 'app-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss'],
})
export class IconPickerComponent {
  @Input() icon;
  @Output() iconChange = new EventEmitter<string>();
  isShow = false;
  icons: string[] = Icons;

  constructor() {}

  updateIcon(icon: string): void {
    this.icon = icon;
    this.iconChange.emit(icon);
    this.isShow = false;
  }
}
