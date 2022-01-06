import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { transaction } from "src/model/transaction";
import { PaymentService } from "src/service/payment.service";
import { ProductionService } from "src/service/production.service";
import { PubService } from "src/service/pub.service";

@Component({
  selector: "app-choix",
  templateUrl: "./choix.component.html",
  styleUrls: ["./choix.component.scss"],
})
export class ChoixComponent implements OnInit {
  public pub: string;
  public missingField = false;
  private sublist: Array<Subscription> = [];

  constructor(
    private paymentService: PaymentService,
    private pubService: PubService,
    private prodService: ProductionService
  ) {}

  @Input() transaction: transaction;
  @Output() transactionChange = new EventEmitter();

  ngOnInit(): void {}

  choose($event) {
    this.transaction.choice = $event;
    if ($event === "café") {
      this.transaction.price = 2;
    } else {
      this.transaction.price = 3;
    }
  }

  sugarChoice(choice: boolean) {
    this.transaction.sugar = choice;

    if (this.transaction.sugar) this.transaction.price++;
  }

  submit() {
    if (this.transaction.choice != null && this.transaction.sugar != null) {
      this.transaction.state = "PAYING";
      this.sublist.push(
        this.pubService.getPub(this.transaction.choice).subscribe(
          (res) => {
            this.pub = res;
          },
          (err) => {
            console.log(err);
          }
        )
      );

      this.sublist.push(
        this.paymentService.receiveTransaction(this.transaction).subscribe(
          (res) => {
            if (res) {
              console.log("paiement fini");
              this.transaction.state = "PRODUCING";

              this.sublist.push(
                this.prodService
                  .startProduction(this.transaction)
                  .subscribe((res) => {
                    this.pubService.sendCommand(this.transaction).subscribe(
                      (res) => {},
                      (err) => {
                        console.log(err);
                      }
                    );
                    this.resetTransaction();
                  })
              );
            }
          },
          (err) => {
            console.log(err);
          }
        )
      );
    } else {
      this.missingField = true;
    }
  }

  annuler() {
    this.sublist.forEach((obs) => {
      obs.unsubscribe();
    });

    this.resetTransaction();
  }

  resetTransaction() {
    this.transaction = {
      choice: null,
      sugar: null,
      price: null,
      state: "CHOOSING",
    };
    this.transactionChange.emit(this.transaction);
    this.missingField = false;
  }
}
