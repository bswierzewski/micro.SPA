import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services';
import { AppUser } from '../models';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective implements OnInit {
  @Input()
  appHasRole: string[];
  appUser: AppUser;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private authService: AuthService
  ) {
    this.authService.currentUser$.pipe(take(1)).subscribe((user) => {
      this.appUser = user;
    });
  }

  ngOnInit(): void {
    if (!this.appHasRole) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      return;
    }
    if (!this.appUser?.roles || this.appUser == null) {
      this.viewContainerRef.clear();
      return;
    }
    if (this.appUser?.roles.some((r) => this.appHasRole?.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
