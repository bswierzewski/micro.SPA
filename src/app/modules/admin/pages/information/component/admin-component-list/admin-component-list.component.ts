import { Component, OnInit } from '@angular/core';
import { DeviceInformationService } from 'src/app/modules/_services/device-information.service';

@Component({
  selector: 'app-admin-component-list',
  templateUrl: './admin-component-list.component.html',
  styleUrls: ['./admin-component-list.component.scss'],
})
export class AdminComponentListComponent implements OnInit {
  components: string[] = [];
  constructor(private deviceInformationService: DeviceInformationService) {
    this.components = deviceInformationService.components;
  }

  ngOnInit(): void {}
}
