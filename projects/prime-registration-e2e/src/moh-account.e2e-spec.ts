import { MohAccountTestPage } from './registration.po';
import { browser } from 'protractor';
import { RegistrationConstants } from '@prime-registration/modules/registration/models/registration-constants.model';
import { FakeDataMohReg } from './registration.data';


describe('MoH Registration - Account Page', () => {
    let page: MohAccountTestPage;
    const data = new FakeDataMohReg();
    const PAGE_URL = `${RegistrationConstants.MOH_REGISTRATION}/${RegistrationConstants.ACCOUNT_PG}`;
    const NEXT_PAGE_URL =  `${RegistrationConstants.MOH_REGISTRATION}/${RegistrationConstants.SECURITY_PG}`;

    beforeEach(() => {
        page = new MohAccountTestPage();
    });

    it('should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PAGE_URL);
    });

});
