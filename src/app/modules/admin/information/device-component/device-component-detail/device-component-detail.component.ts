import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService, CategoryInformationService, DeviceComponentInformationService } from 'src/app/core/_services';
import { Category } from 'src/app/shared/models';

export class Model {
  id = 0;
  name = '';
  icon = '';
  isExpanded = false;
  category = [Category];
}

@Component({
  selector: 'app-device-component-detail',
  templateUrl: './device-component-detail.component.html',
  styleUrls: ['./device-component-detail.component.scss'],
})
export class DeviceComponentDetailComponent implements OnInit {
  model = new Model();
  categories$: Observable<Category[]>;
  constructor(
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryInformationService,
    private componentService: DeviceComponentInformationService
  ) {
    route.params.subscribe((params) => {
      if (params.id === 0) {
      } else {
      }
    });
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {}
}
