import { environment } from './../../../environments/environment';
import { Component, signal } from '@angular/core';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

type EnvioStatus = 'idle' | 'enviando' | 'sucesso' | 'erro';

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
  protected status = signal<EnvioStatus>('idle');

  async enviar(event: Event): Promise<void> {
    event.preventDefault();
    this.status.set('enviando');
    Swal.fire({
      title: 'Enviando mensagem...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      background: '#151a30',
      color: '#eef1ff',
      didOpen: () => Swal.showLoading(),
    });

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: this.nome(),
          from_email: this.email(),
          message: this.mensagem(),
        },
        { publicKey: environment.emailjs.publicKey }
      );

      this.status.set('idle');
      this.nome.set('');
      this.email.set('');
      this.mensagem.set('');

      await Swal.fire({
        icon: 'success',
        title: 'Mensagem enviada!',
        text: 'Vou te responder em breve. Obrigado pelo contato!',
        confirmButtonText: 'Show!',
        confirmButtonColor: '#5ee6c8',
        background: '#151a30',
        color: '#eef1ff',
      });
    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      this.status.set('idle');

      await Swal.fire({
        icon: 'error',
        title: 'Algo deu errado',
        text: 'Não consegui enviar sua mensagem. Tenta de novo ou me manda direto pelo e-mail.',
        confirmButtonText: 'Entendi',
        confirmButtonColor: '#f4685e',
        background: '#151a30',
        color: '#eef1ff',
      });
    }
  }
}
