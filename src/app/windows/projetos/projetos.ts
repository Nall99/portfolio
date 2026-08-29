import { Component } from '@angular/core';
import { Projeto } from '../../core/models/projeto';

@Component({
  imports: [],
  selector: 'app-projetos',
  styleUrl: './projetos.css',
  templateUrl: './projetos.html',
})
export class Projetos {
  protected projetos: Projeto[] = [
    { nome: 'Nome do projeto', descricao: 'O problema que resolve e as tecnologias usadas.', link: '#' },
    { nome: 'Nome do projeto', descricao: 'O problema que resolve e as tecnologias usadas.', link: '#' },
    { nome: 'Nome do projeto', descricao: 'O problema que resolve e as tecnologias usadas.', link: '#' },
    { nome: 'Nome do projeto', descricao: 'O problema que resolve e as tecnologias usadas.', link: '#' },
  ]
}
