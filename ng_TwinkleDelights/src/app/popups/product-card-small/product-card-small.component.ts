import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-small',
  templateUrl: './product-card-small.component.html',
  styleUrls: ['./product-card-small.component.scss']
})
export class ProductCardSmallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: any

}
