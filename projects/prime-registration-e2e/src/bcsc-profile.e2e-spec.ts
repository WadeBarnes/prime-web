import { BCSCRegistrationPage } from './registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './registration.data';
import { PrimeTestPage } from '../../../e2e/src/app.po';

describe('BCSC Registration - Profile Page', () => {
    let page: BCSCRegistrationPage;
    // let page2: PrimeTestPage;
    const data = new FakeDataMohReg();
    let profileData;
    const PAGE_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.PROFILE_PG}`;
    const NEXT_PAGE_URL =  `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.ACCOUNT_PG}`;

    beforeEach(() => {
        page = new BCSCRegistrationPage();
        profileData = data.profileInfo();
        data.setSeed(123);
        profileData['country'] = 'Canada'; // forced the country to be Canada so the faker will generate a province
    });


    it('01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PAGE_URL);
    });

    it('02. should let user continue without filling out any fields', () => {
      page.navigateTo();
      expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');

      page.continue();
      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Accounts page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    it('03. should let users set their own mailing address', () => {
      page.navigateTo();
      page.scrollDown();
      page.clickDiffMailAddress();
      page.fillMailingAddress(profileData);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Accounts page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    it('04. should not let users continue with an incomplete mailing address', () => {
      page.navigateTo();
      page.scrollDown();
      page.clickDiffMailAddress();
      page.continue();

      expect(page.formErrors().count()).toEqual(3, 'page should show 3 error texts on continue');
      expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
    });

    it('05. should let users partially fill out a mailing address but uncheck it, and continue', () => {
      page.navigateTo();
      page.scrollDown();
      page.clickDiffMailAddress();
      page.fillMailingAddress(profileData);
      page.checkDiffMailAddress();
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Accounts page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    it('06. should let users set Preferred First, Middle, and Last name', () => {
      page.navigateTo();
      page.fillPreferredName(profileData);
      browser.sleep(1000 * 5);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Accounts page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    it('07. should not be able to edit read-only information (just check that the fields are disabled)', () => {
      page.navigateTo();
      expect(page.checkEnabled()).toBe(false);
    });

});
