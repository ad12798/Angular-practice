import { Component, OnInit } from '@angular/core/core';
import {Input} from '@angular/core/core';
import {Output,EventEmitter} from '@angular/core/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}