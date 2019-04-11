import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { SearchOrganizationModalComponent } from '../search-organization-modal/search-organization-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentDataService } from '../../services/enrollment-data.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
const headers = ['Organization Name', 'Type', 'City'];
@Component({
  selector: 'app-pharmanet-access',
  templateUrl: './pharmanet-access.component.html',
  styleUrls: ['./pharmanet-access.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PharmanetAccessComponent implements OnInit {
  fa$: BehaviorSubject<FormGroup[]> = new BehaviorSubject(null);
  results = false;
  dateOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    openSelectorTopOfInput: true,
    showSelectorArrow: false
  };

  constructor(
    private stateSvc: EnrollmentStateService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    if (!!this.stateSvc.organizationForm) this.results = true;
    this.fa$.next(this.stateSvc.organizationForm);
  }

  addOrganization() {
    return this.openModal();
  }

  openModal() {
    // this.stateSvc.organizationForm = [];
    // this.stateSvc.orgResultsClear();
    const dialog = this.dialog;
    const ref = dialog.open(SearchOrganizationModalComponent, {
      panelClass: 'test'
    });
    ref.afterClosed().subscribe(obs => {
      const arr = this.stateSvc.organizationForm;
      this.stateSvc.organizationForm = obs;
      this.fa$.next(this.stateSvc.organizationForm);
      this.results = true;
    });
  }

  remove(i: number) {
    const fa = this.stateSvc.removeFormGroup(this.fa$.value, i);
    this.stateSvc.organizationForm = fa;
  }
}
