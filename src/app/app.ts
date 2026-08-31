import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Desktop } from "./desktop/desktop";
import { Boot } from './boot/boot';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Desktop, Boot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  protected booting = signal(true);
}
