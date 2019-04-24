import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpParams, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { CacheInterface } from '../models/cache-api.model';
import { AbstractHttpService } from 'moh-common-lib/services';


@Injectable({
  providedIn: 'root'
})
export class CacheApiService extends AbstractHttpService {
  /**
   *  Default hardcoded header values.  Note: Authentication headers are added
   *  at runtime in the httpOptions() method.
   */
  protected _headers: HttpHeaders = new HttpHeaders();

  protected _url: string;

  constructor( protected http: HttpClient ) {
    super( http );
  }

  // Cache requests
  getCache( paramValue: string ) {
    const url = this._url + '/getCache';
    const params = new HttpParams().set( 'param', paramValue );
    return this.get<CacheInterface>( url, params );
  }


  /**
   *
   * @param error
   */
  protected handleError( error: HttpErrorResponse ) {

    if (error.error instanceof ErrorEvent) {
      // Client-side / network error occured
      console.error('An error occured: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code
      console.error(`Backend returned error code: ${error.status}.  Error body: ${error.error}`);
    }
     // A user facing error message /could/ go here; we shouldn't log dev info through the throwError observable
     return throwError( 'Unable to process request!' );
  }

}
