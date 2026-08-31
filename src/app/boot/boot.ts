import { Component, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-boot',
  styleUrl: './boot.css',
  templateUrl: './boot.html',
})
export class Boot {
  finished = output<void>();
  protected hiding = signal(false);

  constructor() {
    setTimeout(() => {
      this.hiding.set(true);
      setTimeout(() => this.finished.emit(), 600); // espera a transição de fade
    }, 1400);
  }
}
