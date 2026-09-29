export type CategoriaProjeto =
    'Web'                  |
    'Front-end'         |
    'Back-end'          |
    'Full-stack'        |
    'Mobile'            |
    'Data Science'      |
    'DevOps'            |
    'UI/UX Design'      |
    'Game Development'  |
    'Machine Learning'  |
    'Other';

export interface Projeto {
  nome: string;
  descricao: string;
  link: string;
  imagens: string[];
  categoria: CategoriaProjeto;
  tecnologias: string[];
}

/**
 * Gera o array de caminhos de imagem a partir de uma pasta e uma quantidade.
 * Ex: criarImagens('/images/projects/angular', 3)
 *  → ['/images/projects/angular/image-1.png', '.../image-2.png', '.../image-3.png']
 */
export function criarImagens(pasta: string, quantidade: number, extensao = 'png'): string[] {
  return Array.from({ length: quantidade }, (_, i) => `${pasta}/image-${i + 1}.${extensao}`);
}
