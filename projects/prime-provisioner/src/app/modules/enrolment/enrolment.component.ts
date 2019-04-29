import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Container } from 'moh-common-lib/models';
import { subRoutes } from '@prime-prov/core/models/sub-routes';
import { of, from } from 'rxjs';

@Component({
  selector: 'prov-enrolment',
  template: `
    <common-page-framework layout="blank">
      <h1>Application Enrolment</h1>
    </common-page-framework>
    <common-core-breadcrumb>
      <common-wizard-progress-bar
        center
        [progressSteps]="progressSteps"
      ></common-wizard-progress-bar>
    </common-core-breadcrumb>

    <router-outlet></router-outlet>
    <common-form-action-bar
      (btnClick)="advancePage()"
      [defaultColor]="!stateSvc.submit"
      [submitLabel]="submitLabel$ | async"
      [isLoading]="loading"
    ></common-form-action-bar>
  `,
  styleUrls: ['./enrolment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnrolmentComponent extends Container implements OnInit {
  loading = false;
  submitLabel$ = from('Continue');

  constructor() {
    super();
    this.setProgressSteps(subRoutes);
  }

  ngOnInit() {}

  advancePage() {
    console.log('advance the page');
  }
}
