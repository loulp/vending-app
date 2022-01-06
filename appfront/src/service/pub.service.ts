import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { transaction } from "src/model/transaction";
import { Commande } from "src/model/commande";

@Injectable({
  providedIn: "root",
})
export class PubService {
  constructor(private http: HttpClient) {}

  getPub(choice: string) {
    return this.http.get(`http://localhost:8081/pub/${choice}`, {
      responseType: "text",
    });
  }

  sendCommand(transaction: transaction) {
    const cmd = new Commande();
    cmd.boisson = transaction.choice;
    cmd.sucre = transaction.sugar;
    return this.http.post<Commande>("http://localhost:8081/commande", cmd);
  }
}
