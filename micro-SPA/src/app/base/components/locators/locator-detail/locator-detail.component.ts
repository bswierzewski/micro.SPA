import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/_models/Device';

@Component({
  selector: 'app-locator-detail',
  templateUrl: './locator-detail.component.html',
  styleUrls: ['./locator-detail.component.css']
})
export class LocatorDetailComponent implements OnInit {

  locator: Device;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.locator = this.activatedRoute.snapshot.data.locator;
  }

}
