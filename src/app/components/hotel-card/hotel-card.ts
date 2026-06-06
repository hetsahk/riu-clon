import { Component, input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-hotel-card',
  imports: [DecimalPipe],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.css',
})
export class HotelCard {
  // Modern signal inputs: read in the template as name(), price(), etc.
  name = input<string>('');
  price = input<number>(0);
  imageUrl = input<string>('');
  tags = input<string[]>([]);

  // Local UI state lives in a writable signal.
  isFavorite = signal(false);

  toggleFavorite(): void {
    // update() derives the next value from the current one.
    this.isFavorite.update((current) => !current);
  }
}
