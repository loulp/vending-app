import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChoixComponent } from "./choix.component";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe("ChoixComponent", () => {
  let component: ChoixComponent;
  let fixture: ComponentFixture<ChoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ChoixComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should show an error message", () => {
    fixture = TestBed.createComponent(ChoixComponent);

    // fixture.debugElement.nativeElement.querySelector("#boisson").click();
    component.transaction.choice = "café";
    component.transaction.sugar = null;
    fixture.debugElement.nativeElement.querySelector(".valider").click();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const errormsg =
        fixture.debugElement.nativeElement.querySelector(".errorMsg");
      expect(errormsg.textContent).toBe("Choissisez sucre & boisson");
    });
  });
});
