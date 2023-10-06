import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RawHolding } from './Holding';
import { RAWHOLDINGS } from 'src/assets/holdings';

@Injectable({
  providedIn: 'root'
})
export class HoldingsService {

  constructor() { }
  
  getRawHoldings(): Observable<RawHolding[]> {
    const RawHoldings = of(RAWHOLDINGS);
    return RawHoldings;
  }
}
