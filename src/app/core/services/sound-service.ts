import { Service, signal, afterNextRender } from '@angular/core';

@Service()
export class SoundService {
  private cache = new Map<string, HTMLAudioElement>();
  readonly habilitado = signal(true);

  constructor() {
    afterNextRender(() => {
      this.carregar('click', 'sounds/click.wav');
      this.carregar('minimize', 'sounds/minimize-window.wav');
    });
  }

  private carregar(nome: string, caminho: string): void {
    const audio = new Audio(caminho);
    audio.preload = 'auto';
    audio.volume = 0.4;
    this.cache.set(nome, audio);
  }

  tocar(nome: string): void {
    if (!this.habilitado()) return;
    const original = this.cache.get(nome);
    if (!original) return;

    const instancia = original.cloneNode(true) as HTMLAudioElement;
    instancia.volume = original.volume;
    instancia.play().catch(() => {});
  }

  alternar(): void {
    this.habilitado.update(v => !v);
  }
}
