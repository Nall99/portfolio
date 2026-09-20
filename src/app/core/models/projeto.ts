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
  imagem: string;
  categoria: CategoriaProjeto;
  tecnologias: string[];
}
