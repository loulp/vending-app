import { Component, OnInit } from "@angular/core";
import { transaction } from "src/model/transaction";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "appfront";

  public transaction: transaction;

  ngOnInit() {
    this.transaction = {
      choice: null,
      sugar: null,
      price: null,
      state: "CHOOSING"
    }
  }

  showWaiting($event) {    
    this.transaction = $event
  }
}
