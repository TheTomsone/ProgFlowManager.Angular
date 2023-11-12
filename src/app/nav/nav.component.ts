import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from '../models/link';
import { ActionFunction } from '../models/action-function';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  navigateTo: ActionFunction<[string]> = (path: string) => {
    this._router.navigate([path]);
    console.log('Navigation to ' + path);
  };

  topNav: Link[] = [
    new Link('Home', this.navigateTo, '/home'),
    new Link('Dashboard', undefined, '/dashboard', [
      new Link('Software', this.navigateTo, '/dashboard/software'),
      new Link('Team', this.navigateTo, '/dashboard/team'),
      new Link('Account', this.navigateTo, '/dashboard/account')
    ]),
    new Link('Roadmap', undefined, '/roadmap', [
      new Link('Features', this.navigateTo, '/roadmap/features'),
      new Link('Quarter', this.navigateTo, '/roadmap/quarters'),
    ])
  ];
  botNav: Link[] = [
    new Link('Account', this.navigateTo, '/account'),
    new Link('Logout', this.navigateTo, '/home'),
    new Link('Login', this.navigateTo, '/login'),
    new Link('Register', this.navigateTo, '/register'),
  ];

  @Input() currentNav = this.topNav;

  @Input() isDark: boolean = false;

  @Input() depth: number = 1;
  @Input() isHide: boolean = false;

  constructor(private _router: Router) {}
}
