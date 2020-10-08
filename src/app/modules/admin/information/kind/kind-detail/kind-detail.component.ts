import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, KindInformationService } from 'src/app/core/services';
import { Kind } from 'src/app/shared/models';

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
export class KindDetailComponent {
  model = new Model();
  isCreateMode = false;

  constructor(
    private kindService: KindInformationService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe((params) => {
      this.isCreateMode = params.id === '0';
      if (!this.isCreateMode) {
        kindService.getKind(params.id).subscribe((data) => {
          this.model.id = data.id;
          this.model.name = data.name;
          this.model.icon = data.icon;
        });
      }
    });
  }

  onSumbitClick(form: NgForm): void {
    if (form.invalid || !this.model.icon) {
      if (!this.model.icon) {
        this.alertService.error('Icon is required');
      }
      return;
    }

    const kind = {
      id: this.model.id,
      name: this.model.name,
      icon: this.model.icon,
    } as Kind;

    if (this.isCreateMode) {
      this.kindService.addKind(kind).subscribe(
        (next) => {
          this.alertService.success('Kind added');
          this.router.navigateByUrl('/admin/information/kinds');
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    } else {
      this.kindService.updateKind(kind).subscribe(
        (next) => {
          this.alertService.success('Kind updated');
          this.router.navigateByUrl('/admin/information/kinds');
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }

  onReturnClick(): void {
    this.router.navigateByUrl('/admin/information/kinds');
  }
}
