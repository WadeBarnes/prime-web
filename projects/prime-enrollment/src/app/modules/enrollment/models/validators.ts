import { AbstractControl, ValidatorFn } from '@angular/forms';

export function behalfOfJobTitleValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    if (control.parent.controls['collegeCert'].value) return null;
    // if (control.value === null) return { value: 'On behalf of is required' };
    return control.parent.controls['onBehalfOf'].value
      ? control.value === null
        ? null
        : control.value.length < 1
        ? { invalidOnbehalfOf: { value: 'On behalf of job title is required' } }
        : null
      : null;
  };
}

export function behalfOfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    const bool = !control.parent.controls['collegeCert'].value;
    console.log(bool);
    if (bool) {
      return null;
    } else return { invalidOnbehalfOf: { value: 'On behalf of is required' } };
  };
}

export function licenseClassValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;

    if (!control.parent.controls['collegeCert'].value) return null;
    const parent = control.parent.controls['collegeCert'].value;
    if (parent === null || parent === 'None') return null;
    // if (control.untouched) return null;
    return control.value === null
      ? { invalidLicenseClass: { value: 'Invalid license class' } }
      : null;
  };
}

export function descriptionValidator(name: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    if (!control.parent[name]) {
      return;
    }
    return control.parent.controls[name].value
      ? control.value === null
        ? {
            invalidDescription: {
              value: `The ${name}Description field is required`
            }
          }
        : control.value.length < 10
        ? {
            invalidDescription: {
              value: `Enter at least 10 characters in the ${name}Description field`
            }
          }
        : null
      : null;
  };
}

export function preferredContactValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    const val = control.parent.controls['sms'].value;
    if (control.value === 'email') return null;
    if (val && control.value === 'sms') return null;
    if (!val && control.value === 'sms') {
      return {
        invalidSMS: {
          value:
            'Cannot select SMS alerts if the phone number is not SMS capable'
        }
      };
    }
  };
}

export function contactValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    if (
      !control.parent.controls['phone'] &&
      !control.parent.controls['email']
    ) {
      return {
        invalid: {
          value:
            'Cannot select SMS alerts if the phone number is not SMS capable'
        }
      };
    } else return null;
  };
}
// +1 (403) 437-4886

export function numberValidator() {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    if (!control.parent.controls['collegeCert'].value) return null;
    if (control.parent.controls['collegeCert'].value === 'None') return null;
    if (control.value.length < 1) {
      return { invalid: { value: `${control.value} is not valid` } };
    }
    const forbidden = !/([0-9])/.test(control.value);
    return forbidden
      ? { invalid: { value: `${control.value} is not valid` } }
      : null;
  };
}

export function phoneNumberValidator() {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = !/^^[\+]?[0-9]{1,3}[ ][(]?[0-9]{3}[)]?[ ][-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim.test(
      control.value
    );
    return forbidden
      ? { invalid: { value: `${control.value} is not valid` } }
      : null;
  };
}

export function insulinPumpValidator() {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    if (!control.parent.value.deviceProvider) return null;
    if (control.value === null || control.value === undefined) {
      return {
        invalid: { ipValue: `Invalid value for insulin pump provider` }
      };
    } else return null;
  };
}
