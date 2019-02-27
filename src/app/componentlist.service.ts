import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface COMPONENT {
  url: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})

export class COMPONENTLISTSERVICE {
component = 'componentslist.json';

constructor(private http: HttpClient) { }


getComponent() {
  return this.http.get<COMPONENT>(this.component);

}


  getComponent_1() {
    return this.http.get(this.component);
  }

  getComponent_2() {
    // now returns an Observable of Config
    return this.http.get<COMPONENT>(this.component);
  }

  getComponent_3() {
    return this.http.get<COMPONENT>(this.component)
      .pipe(
        catchError(this.handleError)
      );
  }

  getComponentResponse(): Observable<HttpResponse<COMPONENT>> {
    return this.http.get<COMPONENT>(
      this.component, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }

}
