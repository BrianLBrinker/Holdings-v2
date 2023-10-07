import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { RawHolding } from './Holding';

@Injectable({
  providedIn: 'root'
})
export class HoldingsService {
  constructor(
    private http: HttpClient
  ) { }
  
  getLocalFile(filePath: string): Observable<any> {
    // return this.http.get(filePath).pipe(
    //   delay(2000 * Math.random()) // Add a delay of up to 2 seconds
    // );
    return this.http.get(filePath);
  }
}
