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
    { nome: 'GitHub', handle: 'github.com/seuusuario', link: '#', cor: '#20233a' },
    { nome: 'LinkedIn', handle: 'linkedin.com/in/seuusuario', link: '#', cor: '#0a66c2' },
    { nome: 'Instagram', handle: '@seuusuario', link: '#', cor: '#e1306c' },
    { nome: 'X / Twitter', handle: '@seuusuario', link: '#', cor: '#111111' },
    { nome: 'Behance', handle: 'behance.net/seuusuario', link: '#', cor: '#1769ff' },
  ]
}
