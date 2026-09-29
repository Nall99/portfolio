import { Service, signal } from '@angular/core';
import { Projeto } from '../models/projeto';

@Service()
export class GaleriaService {
  readonly aberto = signal(false);
  readonly projeto = signal<Projeto | null>(null);
  readonly indice = signal(0);

  abrir(projeto: Projeto): void {
    this.projeto.set(projeto);
    this.indice.set(0);
    this.aberto.set(true);
  }

  fechar(): void {
    this.aberto.set(false);
    this.projeto.set(null);
  }

  proxima(): void {
    const p = this.projeto();
    if (!p) return;
    this.indice.update(i => (i + 1) % p.imagens.length);
  }

  anterior(): void {
    const p = this.projeto();
    if (!p) return;
    this.indice.update(i => (i - 1 + p.imagens.length) % p.imagens.length);
  }
}
