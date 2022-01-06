import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { transaction } from "src/model/transaction";
import { from, of } from "rxjs";
import { delay } from "rxjs/internal/operators";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  constructor() {}

  isValid: boolean;

  receiveTransaction(transaction: transaction): Observable<any> {
    return of(this.validTransaction(transaction.price)).pipe(delay(3000));
  }

  validTransaction(price: number) {
    const moneyCount = 5;

    return moneyCount > price
      ? this.giveChange(price - moneyCount)
      : price == moneyCount;
  }

  giveChange(change: number) {
    return true;
  }
}
