import { Injectable } from '@angular/core';
import { CommonLogger, CommonLogMessage } from 'moh-common-lib/services';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

/** Types of events to be logged */
export enum RegistrationEvent {
  VALIDATE_USER = 'validate user',
  REGISTER_USER = 'register user'
}

/** Log message format, must be structured like CommonLogMessage Interface */
export interface LogMessage {
  /** The type of event being logged. */
  event: RegistrationEvent;
  title?: string;
  url?: string;
  errMsg?: string;
  success?: boolean;
}

@Injectable()
export class LoggerService extends CommonLogger {

  constructor( protected http: HttpClient ) {
    super( http );
    this.setURL( environment.loggingURL );
  }

  /**
   * Overrided function - must have event within the interface
   * @param message
   */
  public log( message: LogMessage ) {
    this._log( message as CommonLogMessage );
  }

  /**
   * Overrided function - must have event within the interface
   * @param errorMessage
   */
  public logError( errorMessage: LogMessage ) {
    this._logError( errorMessage as CommonLogMessage );
  }
}
