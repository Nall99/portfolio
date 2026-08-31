import { Component, DestroyRef, output, signal, inject, afterNextRender } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-boot',
  styleUrl: './boot.css',
  templateUrl: './boot.html',
})
export class Boot {
  finished = output<void>();
  protected hiding = signal(false);
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const t1 = setTimeout(() => {
        this.hiding.set(true);
        const t2 = setTimeout(() => this.finished.emit(), 600);
        this.destroyRef.onDestroy(() => clearTimeout(t2));
      }, 1400);
      this.destroyRef.onDestroy(() => clearTimeout(t1));
    });
  }
}
