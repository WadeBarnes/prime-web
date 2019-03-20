import { Injectable } from '@angular/core';
import { CountryList, ProvinceList } from '../../../projects/prime-registration/src/app/modules/registration/components/address/address.component';
import { StatusMsgInterface } from '../models/api-base.model';
/**
 * TODO: Set up service to store data returned from the cache service once
 *       determined how it will be configured/setup
 */

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  /**
   * Country List
   * Populated via call to reg/rest/getCache?param=countries
   */
  public countryList: CountryList[] = [];
  /**
   * Province List
   * Populated via call to reg/rest/getCache?param=provinces
   */
  public provinceList: ProvinceList[] = [];

  /**
   * Message List
   * Populated via call to reg/rest/getCache?param=messages
   */
  public enhancedMsgList: StatusMsgInterface[];

  constructor() {}

}
