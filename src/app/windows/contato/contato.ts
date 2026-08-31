import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contato',
  styleUrl: './contato.css',
  templateUrl: './contato.html',
})
export class Contato {
  protected nome = signal('');
  protected email = signal('');
  protected mensagem = signal('');

  enviar(event: Event): void {
    event.preventDefault();
    const assunto = encodeURIComponent(`Contato de ${this.nome()}`);
    const corpo = encodeURIComponent(`${this.mensagem()}\n\n— ${this.nome()} (${this.email()})`);
    window.location.href = `mailto:seuemail@exemplo.com?subject=${assunto}&body=${corpo}`;
  }
}
