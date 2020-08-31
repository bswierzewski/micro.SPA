import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-version-create',
  templateUrl: './admin-version-create.component.html',
  styleUrls: ['./admin-version-create.component.scss'],
})
export class AdminVersionCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(value: NgForm) {
    console.log(value.form.value);
    value.resetForm();
  }
}
