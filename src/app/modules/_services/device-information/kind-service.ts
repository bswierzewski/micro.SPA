import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class KindService {
  kinds$: Observable<string[]>;

  private kinds: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  constructor() {
    this.kinds$ = of(this.kinds);
  }

  addKinds(name: string): void {
    this.kinds.push(name);
    this.kinds$ = of(this.kinds);
  }
}
