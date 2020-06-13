import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/_models/Device';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-scanner-detail',
  templateUrl: './scanner-detail.component.html',
  styleUrls: ['./scanner-detail.component.css']
})
export class ScannerDetailComponent implements OnInit {
  scanner: Device;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.scanner = this.activatedRoute.snapshot.data.scanner;
  }
}
