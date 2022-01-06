import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChoixComponent } from "./choix.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { transaction } from "src/model/transaction";

describe("ChoixComponent", () => {
  let component: ChoixComponent;
  let fixture: ComponentFixture<ChoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ChoixComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixComponent);
    component = fixture.componentInstance;
    component.transaction = new transaction(null, null, null, "CHOOSING");

    fixture.detectChanges();
  });

  it("should show an error message", () => {
    fixture.whenRenderingDone().then(() => {
      fixture.debugElement.nativeElement.querySelector("#valider").click();

      fixture.whenStable().then(() => {
        const errormsg =
          fixture.debugElement.nativeElement.querySelector(".errorMsg");
        expect(errormsg.textContent).toBe("Choissisez sucre & boisson");
      });
    });
  });

  it("Should abort operation and return to choice view", () => {
    fixture.whenRenderingDone().then(() => {
      fixture.debugElement.nativeElement.querySelector("#boisson").click();
      fixture.debugElement.nativeElement.querySelector("#sucrer").click();
      fixture.debugElement.nativeElement.querySelector("#valider").click();

      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const paymentDiv =
          fixture.debugElement.nativeElement.querySelector("#payment");
        expect(paymentDiv.textContent).toEqual("paiement en cours");
      });

      fixture.debugElement.nativeElement.querySelector("#cancel").click();

      const bntValider =
        fixture.debugElement.nativeElement.querySelector("#valider");

      expect(bntValider).toBeTruthy();
    });
  });
});
