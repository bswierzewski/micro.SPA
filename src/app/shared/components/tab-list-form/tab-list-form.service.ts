import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITabListFormData } from '.';

@Injectable({
  providedIn: 'root',
})
export class TabListFormService<T extends ITabListFormData> {
  dataSource: T[];
  removeSubject$: Subject<any> = new Subject();
  clearSubject$: Subject<any> = new Subject();
  selectionChangeSubject$: Subject<T> = new Subject();

  constructor() {}
}
