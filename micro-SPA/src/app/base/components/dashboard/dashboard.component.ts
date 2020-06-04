import { Component, OnInit } from '@angular/core';
import { Device } from '../../../_models/Device';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devices: Device[];
  displayedColumns: string[] = ['id', 'name', 'macAddress', 'created', 'lastActivated', 'kind', 'isActive', 'isArchival'];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.devices = this.activatedRoute.snapshot.data.devices;
  }
}
