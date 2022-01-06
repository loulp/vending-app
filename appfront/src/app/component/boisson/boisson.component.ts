import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.scss']
})
export class BoissonComponent implements OnInit {

  @Input() boisson: string
  @Output() choose = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
