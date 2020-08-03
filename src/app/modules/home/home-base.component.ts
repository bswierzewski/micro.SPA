import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.scss'],
})
export class HomeBaseComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
