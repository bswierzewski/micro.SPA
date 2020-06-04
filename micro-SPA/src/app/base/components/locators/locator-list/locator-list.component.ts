import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/_models/Device';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locator-list',
  templateUrl: './locator-list.component.html',
  styleUrls: ['./locator-list.component.css']
})
export class LocatorListComponent implements OnInit {
  locators: Device[];
  displayedColumns: string[] = ['id', 'name', 'macAddress', 'created', 'lastActivated', 'kind', 'isActive', 'isArchival', 'detail'];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.locators = this.activatedRoute.snapshot.data.locators;
  }
}
