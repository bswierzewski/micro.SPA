import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class ComponentService {
  components$: Observable<string[]> = of([
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ]);

  constructor() {}

  addComponents(name: string): void {
    this.components$.pipe(map((components) => components.push(name)));
  }
}
