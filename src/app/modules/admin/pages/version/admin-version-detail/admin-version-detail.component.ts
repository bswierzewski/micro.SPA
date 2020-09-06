import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-version-detail',
  templateUrl: './admin-version-detail.component.html',
  styleUrls: ['./admin-version-detail.component.scss'],
})
export class AdminVersionDetailComponent implements OnInit {
  isCreatedMode = false;
  fileToUpload: File = null;

  constructor(route: ActivatedRoute) {
    this.isCreatedMode = route.snapshot.data.isCreatedMode;
  }

  ngOnInit(): void {}

  onSubmitClick(value: NgForm): void {
    console.log(value.form.value);
    value.resetForm();
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  getHeader(): string {
    return '';
  }

  getSubmitButtonName(): string {
    return this.isCreatedMode ? 'Create' : 'Update';
  }

  getInputFileText(): string {
    return this.fileToUpload ? this.fileToUpload.name : 'Choose file';
  }
}
