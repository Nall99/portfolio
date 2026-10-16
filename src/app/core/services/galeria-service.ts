import { Service, signal, inject } from '@angular/core';
import { Projeto } from '../models/projeto';
import { SoundService } from './sound-service';

@Service()
export class GaleriaService {
  readonly aberto = signal(false);
  readonly projeto = signal<Projeto | null>(null);
  readonly indice = signal(0);

  private sound = inject(SoundService);

  abrir(projeto: Projeto): void {
    this.sound.tocar('click');
    this.projeto.set(projeto);
    this.indice.set(0);
    this.aberto.set(true);
  }

  fechar(): void {
    this.sound.tocar('click');
    this.aberto.set(false);
    this.projeto.set(null);
  }

  proxima(): void {
    this.sound.tocar('click');
    const p = this.projeto();
    if (!p) return;
    this.indice.update(i => (i + 1) % p.imagens.length);
  }

  anterior(): void {
    this.sound.tocar('click');
    const p = this.projeto();
    if (!p) return;
    this.indice.update(i => (i - 1 + p.imagens.length) % p.imagens.length);
  }
}
