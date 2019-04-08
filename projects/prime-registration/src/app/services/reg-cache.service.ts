import { Injectable } from '@angular/core';
import { DocumentType } from '@prime-core/models/documents.interface';
import { CacheService } from '@prime-core/services/cache.service';
import { CacheApiService } from '@prime-core/services/cache-api.service';
import { BehaviorSubject } from 'rxjs';
import { StatusMsgInterface } from '@prime-core/models/api-base.model';

/**
 * Store data retrieved from cache service
 */
@Injectable()
export class RegCacheService extends CacheService {

  /**
   * Security NFRs
   *  a) NFR-C: Security - UserID minimum 6 characters in length
   *  b) NFR-C-OCIO: Security - Password minimum 8 characters in length
   */
  public userIDMinLen: string = '6';
  public pwdMinLen: string = '8';


  constructor(protected cacheApiService: CacheApiService) {
    super(cacheApiService);
   }

  /**
   * TODO: Make calls to cache service to retrieve questions, or some other
   *       method that allows modification without changing source code
   *  a) NFR-Configurability - Available security questions
   *  b) NFR-Configurability - Number of security questions to setup
   *
   */
  public numSecQuestion: number = 3;
  public secQuestionList: string[];

  public documentTypes: DocumentType[];
}