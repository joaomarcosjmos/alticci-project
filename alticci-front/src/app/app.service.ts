import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = "http://localhost:8081/alticci/";

  constructor(private http: HttpClient) { }

  getAlticciSequence(number: number): Observable<number> {
    return this.http.get<number>(this.baseUrl+number).pipe(
      map((response: any) => response),
      catchError((e: any) => this.handleError(e))
    );
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }
}
