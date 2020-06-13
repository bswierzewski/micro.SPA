import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/_models/Device';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scanner-list',
  templateUrl: './scanner-list.component.html',
  styleUrls: ['./scanner-list.component.css']
})
export class ScannerListComponent implements OnInit {
  scanners: Device[];
  displayedColumns: string[] = ['id', 'name', 'macAddress', 'created', 'lastActivated', 'kind', 'isActive', 'isArchival', 'detail'];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.scanners = this.activatedRoute.snapshot.data.scanners;
  }

}
