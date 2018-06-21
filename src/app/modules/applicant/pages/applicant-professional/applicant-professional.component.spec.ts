import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantProfessionalComponent } from './applicant-professional.component';
import {ApplicantBreadcrumbsComponent} from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import {PrimeToggleComponent} from '../../../../core/toggle/toggle.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {FormsModule} from '@angular/forms';
import {PrimeDataModule} from '../../../prime-data/prime-data.module';
import {PrimeDataService} from '../../../../services/prime-data.service';
import { WizardProgressBarComponent } from '../../../core/components/wizard-progress-bar/wizard-progress-bar.component';
import { AlertModule, ProgressbarModule, ModalModule } from 'ngx-bootstrap';
import { CoreBreadcrumbComponent } from '../../../core/components/core-breadcrumb/core-breadcrumb.component';
import { ApplicantDataService } from '../../../../services/applicant-data.service';
import { DummyDataService } from '../../../../services/dummy-data.service';
import { FileUploaderComponent } from '../../../../core/file-uploader/file-uploader.component';
import { PageFrameworkComponent } from '../../../core/components/page-framework/page-framework.component';

describe('ApplicantProfessionalComponent', () => {
  let component: ApplicantProfessionalComponent;
  let fixture: ComponentFixture<ApplicantProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantProfessionalComponent, ApplicantBreadcrumbsComponent, PrimeToggleComponent, DatepickerComponent, WizardProgressBarComponent, CoreBreadcrumbComponent, FileUploaderComponent, PageFrameworkComponent],
      imports: [RouterTestingModule, NgxMyDatePickerModule.forRoot(), FormsModule, PrimeDataModule.forRoot(), AlertModule.forRoot(), ProgressbarModule.forRoot(), ModalModule.forRoot()],
      providers: [PrimeDataService, ApplicantDataService, DummyDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
