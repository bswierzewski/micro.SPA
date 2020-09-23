import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, KindInformationService } from 'src/app/core/_services';

export class Model {
  id = 0;
  name = '';
  icon = '';
}
@Component({
  selector: 'app-kind-detail',
  templateUrl: './kind-detail.component.html',
  styleUrls: ['./kind-detail.component.scss'],
})
export class KindDetailComponent implements OnInit {
  model = new Model();

  constructor(
    private kindService: KindInformationService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe((params) => {
      if (params.id === 0) {
      } else {
      }
    });
  }

  ngOnInit(): void {}
}
