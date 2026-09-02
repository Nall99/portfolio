import { Component } from '@angular/core';
import { Rede } from '../../core/models/rede';

@Component({
  imports: [],
  selector: 'app-redes-sociais',
  styleUrl: './redes-sociais.css',
  templateUrl: './redes-sociais.html',
})
export class RedesSociais {
  protected redes: Rede[] = [
    { nome: 'GitHub', handle: 'github.com/Nall99', link: 'https://github.com/Nall99', cor: '#20233a' },
    { nome: 'LinkedIn', handle: 'linkedin.com/in/allan-victor-cb', link: 'https://www.linkedin.com/in/allan-victor-cb/', cor: '#0a66c2' },
    { nome: 'Instagram', handle: '@seuusuario', link: '#', cor: '#e1306c' }
  ]
}
