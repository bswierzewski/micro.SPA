import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class CategoryService {
  categories$: Observable<string[]> = of([
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ]);

  constructor() {}

  addCategories(name: string): void {
    this.categories$.pipe(map((categories) => categories.push(name)));
  }
}
