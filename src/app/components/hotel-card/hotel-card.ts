import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-hotel-card',
  imports: [DecimalPipe],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.css',
})
export class HotelCard {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() imageUrl: string = '';
  @Input() tags: string[] = [];
}
