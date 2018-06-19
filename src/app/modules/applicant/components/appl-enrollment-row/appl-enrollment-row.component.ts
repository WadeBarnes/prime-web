import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnrollmentRow} from '../../../../core/enrollment-row/enrollment-row.class';
import {fadeIn, loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {AccessReasons, DeclinedReasons, SiteAccess} from '../../../../models/sites.model';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {SearchDomain} from '../../../../core/user-info-button/user-info-button.component';

// Specific to this component
export interface ApplEnrollmentRowItem {
  title: string;

  /** associatedObjectId and title both refer to the same underlying object. By
   * having an id, we can lookup from the EnrollmentRow -> item, e.g. when
   * navigating between pages */
  associatedObjectId: string;

  /** Optional and only used in one config. */
  expandableRows?: SiteAccess[];
}

@Component({
  selector: 'prime-enrollment-row',
  templateUrl: './appl-enrollment-row.component.html',
  styleUrls: ['./appl-enrollment-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class ApplEnrollmentRowComponent extends EnrollmentRow implements OnInit {

  @Input() rowData: ApplEnrollmentRowItem;
  @Output() onChange = new EventEmitter<boolean>();

  public acceptedEnroll: boolean = false;
  public declinedEnroll: boolean = false;
  public applicantSearch: SearchDomain = SearchDomain.Applicant; // Domain to search for user sites

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.rowData) {
      return;
    }
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  onAccept() {
    console.log('Accept enrollment');
    this.acceptedEnroll = true;
    this.onChange.emit(true);
  }

  onDecline() {
    console.log('Declined enrollment');
    this.declinedEnroll = true;
    this.onChange.emit(true);
  }

  onSelect($event) {
    console.log('onSelect ', $event);
  }

  get declinedReasons() {
    const list = Object.keys(DeclinedReasons);
    return list.map( x => {return DeclinedReasons[x]; });
  }

  get declinedReason() {
    const declinedreason = this.siteAccessRequiringAttention.map(x => {
      return x.declinedReason; }).filter( x => x);

    if (declinedreason.length !== 0) {
      return declinedreason[0];
    }
    return 'Please Select';
  }

  get startDate() {
    return this.siteAccessRequiringAttention.map(x => { return x.startDateShort; });
  }

  get endDate() {
    return this.siteAccessRequiringAttention.map(x => { return x.endDateShort; });
  }

  isNewEnrol() {
    return this.siteAccessRequiringAttention.filter(x => {
      return x.status === EnrollmentStatus.New;
    }).length !== 0;
  }

  isDeclinedEnrol() {
    return this.siteAccessRequiringAttention.filter(x => {
      return x.status === EnrollmentStatus.Declined;
    }).length !== 0;
  }

  // abstract method - defined in derived
  /** This function is responsible for generating site access row titles depending on dashboard type */
  get siteAccessRequiringAttention(): any[] {

    if (!this.rowData || !this.rowData.expandableRows) {
      return [];
    }

    return this.rowData.expandableRows.map(siteAccess => {
      siteAccess.title = `${siteAccess.site.name}`;
      return siteAccess;
    });
  }
}
