import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-version-detail',
  templateUrl: './admin-version-detail.component.html',
  styleUrls: ['./admin-version-detail.component.scss'],
})
export class AdminVersionDetailComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    console.log(route.snapshot.data);
  }

  ngOnInit(): void {}

  onSubmit(value: NgForm) {
    console.log(value.form.value);
    value.resetForm();
  }
}
