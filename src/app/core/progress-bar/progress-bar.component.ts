import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProgressBarItem } from './progress-bar.interface';


@Component({
  selector: 'prime-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  progressBarList: ProgressBarItem[] = [
    {displayName: 'Professional Information', routerLink: '/professional-info'},
    {displayName: 'Site Access', routerLink:  '/site-access'},
    {displayName: 'Contact Information', routerLink: '/contact-info'},
    {displayName: 'Self Declaration', routerLink: '/self-declaration'},
    {displayName: 'User Acceptance', routerLink: '/user-acceptance'},
    {displayName: 'Review & Submit ', routerLink: '/review'},
  ]

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public isActive(item: ProgressBarItem): boolean {
    return this.router.isActive(item.routerLink, false);
  }

  public isAfterActive(item: ProgressBarItem): boolean {
    let routeIndex = -1;
    let activeRouteIndex = -1;
    for (let i = 0; i < this.progressBarList.length; i++) {
      if (this.progressBarList[i].routerLink === item.routerLink) {
        routeIndex = i;
      }
      if (this.isActive(this.progressBarList[i])) {
        activeRouteIndex = i;
      }
    }
    return routeIndex > activeRouteIndex;
  }



}
