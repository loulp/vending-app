import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/internal/operators";
import { transaction } from "src/model/transaction";

@Injectable({
  providedIn: "root",
})
export class ProductionService {
  constructor() {}

  startProduction(transaction: transaction): Observable<any> {
    return of(true).pipe(delay(3000));
  }
}
