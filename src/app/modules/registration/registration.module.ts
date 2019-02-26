import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplProfileComponent } from './components/appl-profile/appl-profile.component';
import { ApplAccountComponent } from './components/appl-account/appl-account.component';
import { ApplSecurityComponent } from './components/appl-security/appl-security.component';
import { ApplDocUploadComponent } from './components/appl-doc-upload/appl-doc-upload.component';
import { SharedCoreModule } from 'moh-common-lib';
import { FormsModule, NgForm } from '@angular/forms';
import { AddressComponent } from './components/address/address.component';
import { HttpClientModule } from '@angular/common/http';
import { PageSectionsComponent } from './components/page-sections/page-sections.component';
import { ApplConfirmationComponent } from './components/appl-confirmation/appl-confirmation.component';
import { NameComponent } from './components/name/name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedCoreModule,
    HttpClientModule
  ],
  declarations: [
    ApplProfileComponent,
    ApplAccountComponent,
    ApplSecurityComponent,
    ApplDocUploadComponent,
    AddressComponent,
    PageSectionsComponent,
    ApplConfirmationComponent,
    NameComponent
  ],
  exports: [
    ApplProfileComponent,
    ApplAccountComponent,
    ApplSecurityComponent,
    ApplDocUploadComponent,
    AddressComponent,
    PageSectionsComponent,
    ApplConfirmationComponent
  ]
})
export class RegistrationModule { }
