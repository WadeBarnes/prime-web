import {
  Component, Input, Output, SimpleChanges,
  EventEmitter, ViewChild, ChangeDetectorRef
} from '@angular/core';
import {NgForm} from "@angular/forms";
// import {Address} from "../../model/address.model";
import './address.component.less';
// import {BaseComponent} from "../base.component";
import { BaseComponent } from '../base-component/base-component.component';
// import {MspProvinceComponent} from "../province/province.component";
// import {MspCountryComponent} from "../country/country.component";

@Component({
  selector: 'prime-address',
  templateUrl: './address.component.html'
})

export class AddressComponent extends BaseComponent {
  // lang = require('./i18n');
  private _useResidentialAddressLine2: boolean = false;
  private _useResidentialAddressLine3: boolean = false;
  private _useMailingAddressLine2: boolean = false;
  private _useMailingAddressLine3: boolean = false;

  /**
   * Model Inputs
   */
  // @Input() residentialAddress: Address;
  @Input() residentialAddress: any; //todo remove - restore address
  @Input() mailingAddress: any; // todo remove - restore address
  @Input() mailingSameAsResidentialAddress: boolean;
  @Output() mailingSameAsResidentialAddressChange = new EventEmitter<boolean>();
  // @Input() mailingAddress: Address;
  @Input() enableOutsideOfBC?: boolean;
  @Input() customResidentialMailingLabel?: string;
  @Input('mailingOnly') mailingOnly: boolean;
  // @Input() mailingAddressHeading:string = this.lang('./en/index.js').mailingAddressHeading;
  @Input() showError: boolean;

  @Output() onChange = new EventEmitter<any>();
  @ViewChild('formRef') form: NgForm;
  // @ViewChild('province') province: MspProvinceComponent;
  // @ViewChild('country') country: MspCountryComponent;

  // Address: typeof Address = Address;

  constructor() {
    super();
    this.residentialAddress = {};
  }

  ngAfterViewInit(): void {
    // super.ngAfterViewInit();

    this.form.valueChanges.subscribe(values => {
      this.onChange.emit(values);
    });
  }

  ngOnChanges(changes: SimpleChanges) {

    // if(!changes['mailingOnly'] && !!changes['mailingSameAsResidentialAddress']){
    //   if(changes['mailingSameAsResidentialAddress'].currentValue === null
    //     || changes['mailingSameAsResidentialAddress'].currentValue === undefined){
    //       this.mailingSameAsResidentialAddress = true;
    //   }
    // }
  }

  // provinceUpdate(event:string){
  //   this.mailingAddress.province = event;
  //   this.onChange.emit(event);
  // }
  // countryUpdate(event:string) {
  //   this.mailingAddress.country = event;
  //   this.onChange.emit(event);
  // }

  /**
   * Auto complete for country
   */

  /**
   * When user click 'Need another address line?'
   */
  useAnotherResidentialAddressLine() {
    if (!this.useResidentialAddressLine2) {
      this.useResidentialAddressLine2 = true;
    }
    else if (!this._useResidentialAddressLine3) {
      this.useResidentialAddressLine3 = true;
    }
  }

  get useResidentialAddressLine2() {
    if (this._useResidentialAddressLine2 ||
       this.residentialAddress.addressLine2) {
      return true;
    }
    return false;
  }

  set useResidentialAddressLine2(value: boolean) {
    this._useResidentialAddressLine2 = value;
    if (!this._useResidentialAddressLine2) {
      this.residentialAddress.addressLine2 = "";
    }
  }

  get useResidentialAddressLine3() {
    if (this._useResidentialAddressLine3 ||
      this.residentialAddress.addressLine3) {
      return true;
    }
    return false;
  }

  set useResidentialAddressLine3(value: boolean) {
    this._useResidentialAddressLine3 = value;
    if (!this._useResidentialAddressLine3) {
      this.residentialAddress.addressLine3 = "";
    }
  }

  /**
   * When user click 'Need another address line?'
   */
  useAnotherMailingAddressLine() {
    if (!this.useMailingAddressLine2) {
      this.useMailingAddressLine2 = true;
    }
    else if (!this.useMailingAddressLine3) {
      this.useMailingAddressLine3 = true;
    }
  }

  get useMailingAddressLine2() {
    if (this._useMailingAddressLine2 ||
      this.mailingAddress.addressLine2) {
      return true;
    }
    return false;
  }

  set useMailingAddressLine2(value: boolean) {
    this._useMailingAddressLine2 = value;
    if (!this._useMailingAddressLine2) {
      this.mailingAddress.addressLine2 = "";
    }
  }

  get useMailingAddressLine3() {
    if (this._useMailingAddressLine3 ||
      this.mailingAddress.addressLine3) {
      return true;
    }
    return false;
  }

  set useMailingAddressLine3(value: boolean) {
    this._useMailingAddressLine3 = value;
    if (!this._useMailingAddressLine3) {
      this.mailingAddress.addressLine3 = "";
    }
  }

  useDifferentMailingAddress() {
    this.mailingSameAsResidentialAddress = false;
    this.mailingSameAsResidentialAddressChange.emit(this.mailingSameAsResidentialAddress);
  }

  useSameMailingAddress() {
    this.mailingSameAsResidentialAddress = true;
    // this.mailingAddress = new Address();
    this.mailingAddress = new Object;
    this.mailingSameAsResidentialAddressChange.emit(this.mailingSameAsResidentialAddress);
  }
}
