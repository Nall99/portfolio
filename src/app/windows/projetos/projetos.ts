import { Component, signal, computed, inject } from '@angular/core';
import { Projeto, CategoriaProjeto, criarImagens } from '../../core/models/projeto';
import { GaleriaService } from '../../core/services/galeria-service';
import { SoundService } from '../../core/services/sound-service';

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
  protected galeria = inject(GaleriaService);

  private sound = inject(SoundService);

  protected filtros: FiltroOpcao[] = [
    { valor: 'todos', label: 'Todos' },
    { valor: 'Web', label: 'Web' },
    { valor: 'Front-end', label: 'Front-end' },
    { valor: 'Back-end', label: 'Back-end' },
    { valor: 'Data Science', label: 'Data Science' },
  ];

  protected filtroAtivo = signal<CategoriaProjeto | 'todos'>('todos');

  protected projetos: Projeto[] = [
    {
      nome: 'Agente Virtual',
      descricao: 'Electra - assistente de estudos de medicina.',
      link: 'https://github.com/Nall99/AgenteVirtual',
      imagens: criarImagens('images/projects/agente-virtual', 5),
      categoria: 'Web',
      tecnologias: ['Angular', 'Python', 'FastAPI', 'Tailwind', 'Vercel', 'openai'],
    },
    {
      nome: 'Galeria de imagens',
      descricao:
        'Galeria de imagens utilizando bucket S3 da MinIO, com upload de imagens e visualização.',
      link: 'https://github.com/Nall99/galeria-project-bucket',
      imagens: criarImagens('images/projects/galeria-de-imagens', 5),
      categoria: 'Web',
      tecnologias: ['Angular', 'Python', 'FastAPI', 'Bootstrap 5', 'S3', 'MinIO'],
    },
    {
      nome: 'Encurtador de link',
      descricao:
        'Encurtador de links feito com Java 21 e Spring Boot, com roteamento dinâmico via Traefik e ambiente completo orquestrado por Docker Compose.',
      link: 'https://github.com/Nall99/shortener_link',
      imagens: criarImagens('images/projects/shortener_link', 4),
      categoria: 'Back-end',
      tecnologias: [
        'java',
        'Spring Boot',
        'PostgreSQL',
        'JPA',
        'Hibernate',
        'Maven',
        'Docker',
        'Traefik',
        'Mockito',
      ],
    },
    {
      nome: 'Lista de Afazeres',
      descricao:
        'Aplicação de gerenciamento de tarefas feita com Angular e SpringBoot, utilizando NeonDB como banco de dados',
      link: 'https://github.com/Nall99/ToDo',
      imagens: criarImagens('images/projects/simple-todo-crud', 4),
      categoria: 'Web',
      tecnologias: [
        'Angular',
        'Spring Boot',
        'NeonDB',
        'PostgreSQL',
        'JPA',
        'Hibernate',
        'Maven',
        'Postgres',
      ],
    },
    {
      nome: 'Análise de uso de celular',
      descricao:
        'Este projeto tem como objetivo explorar e visualizar os dados de uso de telefones celulares em diferentes países do mundo, utilizando um conjunto de dados real e atualizado.',
      link: 'https://github.com/Nall99/Analise-de-uso-de-celular/blob/main/main.ipynb',
      imagens: criarImagens('images/projects/analise-de-Celular', 2),
      categoria: 'Data Science',
      tecnologias: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    },
    {
      nome: 'Angular',
      descricao: 'Pequeno projeto em angular',
      link: 'https://github.com/Nall99/modern-angular',
      imagens: criarImagens('images/projects/modern-angular', 1),
      categoria: 'Front-end',
      tecnologias: ['Angular'],
    },
  ];

  protected projetosFiltrados = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'todos') return this.projetos;
    return this.projetos.filter((p) => p.categoria === filtro);
  });
  selecionarFiltro(valor: CategoriaProjeto | 'todos'): void {
    this.sound.tocar('click');
    this.filtroAtivo.set(valor);
  }
}
