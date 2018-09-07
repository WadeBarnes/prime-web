import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegLoginMfaComponent } from './reg-login-mfa.component';

describe('RegLoginMfaComponent', () => {
  let component: RegLoginMfaComponent;
  let fixture: ComponentFixture<RegLoginMfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegLoginMfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegLoginMfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});