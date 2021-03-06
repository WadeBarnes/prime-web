import { Injectable } from '@angular/core';
import { Registrant } from '../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { SimpleDate } from 'moh-common-lib/models/simple-date.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnrolmentFormBuilder } from '@prime-prov/core/models/form-builder.model';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { ProvisionerConstants } from '@prime-prov/core/models/provisioner-constants.model';
import { Subject, BehaviorSubject } from 'rxjs';

const dateOfBirth = {
  day: 26,
  month: 4,
  year: 1984
} as SimpleDate;

@Injectable({
  providedIn: 'root'
})
export class EnrolmentStateService {
  profileForm = new Registrant();
  contactForm$ = new BehaviorSubject<FormGroup>(
    EnrolmentFormBuilder.contactForm(this.fb)
  );
  contactForm = this.contactForm$.asObservable();
  selfDeclarationForm = EnrolmentFormBuilder.selfDeclarationForm(this.fb);
  index = 0;
  routes;
  touched$ = new Subject<boolean>();

  constructor(private fb: FormBuilder) {
    this.profileForm.address.street = '123 fake st';
    this.profileForm.address.postal = 'V9L 3W8';
    this.profileForm.address.country = 'CAN';
    this.profileForm.address.province = 'BC';
    this.profileForm.address.city = 'Victoria';

    this.profileForm.firstName = 'John';
    this.profileForm.lastName = 'Doe';
    this.profileForm.dateOfBirth = dateOfBirth;

    // console.log(this);
    const routes = [];
    const addRoute = (route: string) => {
      routes.push(route);
    };
    for (let key in ProvisionerConstants) {
      if (ProvisionerConstants.hasOwnProperty(key)) {
        key === 'PROVISIONER' ? null : addRoute(ProvisionerConstants[key]);
      }
    }
    // console.log(ProvisionerConstants);
    this.routes = routes;
  }

  findIndex(urlSeg: UrlSegment[]) {
    const url = urlSeg[0].path;
    const index = this.routes.indexOf(url);
    this.index = index;
  }

  validateIndex(index: number) {
    switch (index) {
      case 0:
        return true;
      case 1:
        return this.contactForm$.value.valid;
      case 2:
        return this.selfDeclarationForm.valid;
      case 3:
        return true;
      case 4:
        return true;
    }
  }
}
