import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.scss'],
})
export class AdminDeviceDetailComponent implements OnInit {
  isCreatedMode = false;
  group: any;
  selectedVersion: any;
  kinds$: any;
  categories$: any;
  components$: any;

  constructor(route: ActivatedRoute) {
    this.isCreatedMode = route.snapshot.data.isCreatedMode;
    this.group = 'auto';
  }

  ngOnInit(): void {}

  onSubmitClick(form: NgForm): void {
    console.log(this.selectedVersion);
    this.selectedVersion = null;
  }

  getHeader(): string {
    return this.isCreatedMode ? 'Create new device' : 'Update device';
  }

  getSubmitButtonName(): string {
    return this.isCreatedMode ? 'Create' : 'Update';
  }

  isAutoUpdate(): boolean {
    return this.group === 'auto';
  }
}
