import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { TabListFormService } from './tab-list-form.service';
import { ITabListFormNavigation } from './ITabListFormNavigation';
import { ITabListFormData } from './ITabListFormData';

@Component({
  selector: 'app-tab-list-form',
  templateUrl: './tab-list-form.component.html',
  styleUrls: ['./tab-list-form.component.scss'],
})
export class TabListFormComponent implements OnInit, OnDestroy {
  isSubscribe = true;
  selectedItem: ITabListFormData[];

  @Input()
  tabNavigation: ITabListFormNavigation[];

  constructor(private route: ActivatedRoute, public tabListFormService: TabListFormService<any>) {
    route.data.subscribe((data) => {
      this.tabNavigation = data.tabNavigation;
    });
  }

  ngOnInit(): void {
    this.tabListFormService.clearSubject$.pipe(takeWhile(() => this.isSubscribe)).subscribe(() => {
      this.selectedItem = null;
    });
  }

  ngOnDestroy(): void {
    this.isSubscribe = false;
  }

  onSelectionChange(): void {
    this.tabListFormService.selectionChangeSubject$.next(this.selectedItem);
  }

  onRemoveClick(item: ITabListFormData): void {
    this.tabListFormService.removeSubject$.next(item);
  }
}
