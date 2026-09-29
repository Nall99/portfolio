import { Component, signal, computed, inject } from '@angular/core';
import { Projeto, CategoriaProjeto, criarImagens } from '../../core/models/projeto';
import { GaleriaService } from '../../core/services/galeria-service';

interface FiltroOpcao {
  valor: CategoriaProjeto | 'todos';
  label: string;
}

@Component({
  imports: [],
  selector: 'app-projetos',
  styleUrl: './projetos.css',
  templateUrl: './projetos.html',
})
export class Projetos {
  protected galeria = inject(GaleriaService)

  protected filtros: FiltroOpcao[] = [
    { valor: 'todos', label: 'Todos' },
    { valor: 'Data Science', label: 'Data Science' },
    { valor: 'Front-end', label: 'Front-end' },
  ];

  protected filtroAtivo = signal<CategoriaProjeto | 'todos'>('todos');



  protected projetos: Projeto[] = [
    {
      nome: 'Agente Virtual',
      descricao: 'Electra - assistente de estudos de medicina.',
      link: 'https://github.com/Nall99/AgenteVirtual',
      imagens: criarImagens("/images/projects/agente-virtual", 5),
      categoria: 'Web',
      tecnologias: ['Angular', 'Python', 'FastAPI', 'Tailwind', 'Vercel', 'openai'],
    },
    {
      nome: 'Análise de uso de celular',
      descricao: 'Este projeto tem como objetivo explorar e visualizar os dados de uso de telefones celulares em diferentes países do mundo, utilizando um conjunto de dados real e atualizado.',
      link: 'https://github.com/Nall99/Analise-de-uso-de-celular/blob/main/main.ipynb',
      imagens: criarImagens("/images/projects/analise-de-Celular", 2),
      categoria: 'Data Science',
      tecnologias: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    },
    {
      nome: 'Angular',
      descricao: 'Pequeno projeto em angular',
      link: 'https://github.com/Nall99/modern-angular',
      imagens: criarImagens("/images/projects/modern-angular", 1),
      categoria: 'Front-end',
      tecnologias: ['Angular'],
    },
  ];

  protected projetosFiltrados = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'todos') return this.projetos;
    return this.projetos.filter(p => p.categoria === filtro);
  });
  selecionarFiltro(valor: CategoriaProjeto | 'todos'): void {
    this.filtroAtivo.set(valor);
  }
}
