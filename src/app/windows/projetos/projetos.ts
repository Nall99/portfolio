import { Component, signal, computed } from '@angular/core';
import { Projeto, CategoriaProjeto } from '../../core/models/projeto';

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
  protected filtros: FiltroOpcao[] = [
    { valor: 'todos', label: 'Todos' },
    { valor: 'Data Science', label: 'Data Science' },
    { valor: 'Front-end', label: 'Front-end' },
  ];

  protected filtroAtivo = signal<CategoriaProjeto | 'todos'>('todos');

  protected projetos: Projeto[] = [
    {
      nome: 'Análise de uso de celular',
      descricao: '',
      link: 'https://github.com/Nall99/Analise-de-uso-de-celular/blob/main/main.ipynb',
      imagem: '/images/projects/projeto-1.png',
      categoria: 'Data Science',
      tecnologias: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    },
    {
      nome: 'Angular',
      descricao: '',
      link: 'https://github.com/Nall99/modern-angular',
      imagem: '/images/projects/projeto-2.png',
      categoria: 'Front-end',
      tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
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
