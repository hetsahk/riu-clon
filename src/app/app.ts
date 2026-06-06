import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotelCard } from './components/hotel-card/hotel-card';
import { Layout } from './components/layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HotelCard, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('riu-clon');
}
