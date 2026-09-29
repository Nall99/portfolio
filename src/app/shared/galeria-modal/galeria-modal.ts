import { afterNextRender, Component, DestroyRef, inject } from '@angular/core';
import { GaleriaService } from '../../core/services/galeria-service';

@Component({
  imports: [],
  selector: 'app-galeria-modal',
  styleUrl: './galeria-modal.css',
  templateUrl: './galeria-modal.html',
})
export class GaleriaModal {
  protected galeria = inject(GaleriaService);
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const handler = (e: KeyboardEvent) => {
        if (!this.galeria.aberto()) return;
        if (e.key === 'Escape') this.galeria.fechar();
        if (e.key === 'ArrowRight') this.galeria.proxima();
        if (e.key === 'ArrowLeft') this.galeria.anterior();
      };
      document.addEventListener('keydown', handler);
      this.destroyRef.onDestroy(() => document.removeEventListener('keydown', handler));
    });
  }
}
