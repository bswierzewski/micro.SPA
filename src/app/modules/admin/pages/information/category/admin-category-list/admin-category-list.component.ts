import { Component, OnInit } from '@angular/core';
import { DeviceInformationService } from 'src/app/modules/_services/device-information.service';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.scss'],
})
export class AdminCategoryListComponent implements OnInit {
  categories: string[] = [];
  constructor(private deviceInformationService: DeviceInformationService) {
    this.categories = deviceInformationService.categories;
  }

  ngOnInit(): void {}
}
