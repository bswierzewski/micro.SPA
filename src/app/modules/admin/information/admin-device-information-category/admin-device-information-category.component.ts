import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { TabListFormService } from 'src/app/shared/components/tab-list-form';
import { DeviceComponent, Category } from 'src/app/shared/models';
import { DeviceComponentInformationService, CategoryInformationService, AlertService } from 'src/app/core/_services';
import { NgForm } from '@angular/forms';

export class Model {
  id = 0;
  name = '';
  icon = '';
  componentIndexes: number[] = [];
  isExpanded = false;
}

@Component({
  selector: 'app-admin-device-information-category',
  templateUrl: './admin-device-information-category.component.html',
  styleUrls: ['./admin-device-information-category.component.scss'],
})
export class AdminDeviceInformationCategoryComponent implements OnInit, OnDestroy {
  components: DeviceComponent[];
  model = new Model();
  isAlive = true;

  constructor(
    private categoriesInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private tabListFormService: TabListFormService<Category>,
    private alertService: AlertService
  ) {
    this.loadComponents();
    this.loadCategories();
  }

  ngOnInit(): void {
    this.selectionChangeSubscribe();
    this.removeSubscribe();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  expansionPanelTitle(): string {
    if (!this.model.componentIndexes[0] && this.model.componentIndexes[0] !== 0) {
      return 'Choose components';
    }
    if (this.model.componentIndexes.length === 1) {
      return this.components[this.model.componentIndexes[0]].name;
    }
    return `${this.components[this.model.componentIndexes[0]].name} (+${this.model.componentIndexes.length - 1} other${
      this.model.componentIndexes.length > 2 ? 's' : ''
    })`;
  }

  selectionChangeSubscribe(): void {
    this.tabListFormService.selectionChangeSubject$.pipe(takeWhile(() => this.isAlive)).subscribe((value: Category) => {
      if (value.name) {
        this.model.id = value.id;
        this.model.name = value.name;
        this.model.icon = value.icon;
        this.model.componentIndexes = this.getIndexes(value.components);
      }
    });
  }

  // Method to subscribe subject
  removeSubscribe(): void {
    this.tabListFormService.removeSubject$.pipe(takeWhile(() => this.isAlive)).subscribe((value: Category) => {
      this.alertService.confirm('Are you sure?', () => {
        this.categoriesInformationService.removeCategory(value.id).subscribe(
          (next) => {
            this.loadCategories();
            this.onClearClick();
          },
          (error) => {
            this.alertService.error(error);
          }
        );
      });
    });
  }

  loadCategories(): void {
    this.tabListFormService.dataSource$ = this.categoriesInformationService.getCategories();
  }

  loadComponents(): void {
    this.deviceComponentInformationService.getDeviceComponents().subscribe(
      (data) => {
        this.components = data;
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }

  // Click event
  onClearClick(): void {
    this.tabListFormService.clearSubject$.next();
    this.model = new Model();
  }

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const category = {
      id: this.model.id,
      name: this.model.name,
      icon: this.model.icon,
      components: this.getComponentIds(this.model.componentIndexes),
    } as Category;

    if (this.model.id === 0) {
      this.categoriesInformationService.addCategory(category).subscribe(
        (next) => {
          this.nextCallback('Category added!', form);
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    } else {
      this.categoriesInformationService.updateCategory(category).subscribe(
        (next) => {
          this.nextCallback('Category updated!', form);
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }

  nextCallback(message: string, form: NgForm): void {
    this.alertService.success(message);
    form.resetForm();
    this.loadCategories();
    this.onClearClick();
  }

  getIndexes(components: number[]): number[] {
    const indexes: number[] = [];

    components?.forEach((component) => {
      const index = this.components.findIndex((x) => x.id === component);
      if (index !== -1) {
        indexes.push(index);
      }
    });

    return indexes;
  }

  getComponentIds(indexes: number[]): number[] {
    const ids: number[] = [];

    indexes?.forEach((index) => {
      ids.push(this.components[index].id);
    });

    return ids;
  }
}
