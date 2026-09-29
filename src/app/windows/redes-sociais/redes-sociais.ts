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
    { nome: 'Instagram', handle: '@allan.victor.9', link: 'https://www.instagram.com/allan.victor.9?stkn=MW13bzhiNWk1bmZsYg==', cor: '#e1306c' }
  ]
}
