export type WindowId =
  | 'sobre-mim'
  | 'projetos'
  | 'contato'
  | 'curriculo'
  | 'redes-sociais';

export interface AppWindow {
  id: WindowId;           // identificador
  title: string;          // titulo
  icon: string;           // caminho do ícone ou nome de componente de ícone
  isOpen: boolean;        // verifica está aberto
  isMinimized: boolean;   // verifica está minimizado
  isMaximized: boolean;   // verifica se está maximinizado
  zIndex: number;         // camada (vai ditar a ordem das janelas, qual está na frente e qual está atrás)
  openOrder: number;       // ordem de abertura
  position: { x: number; y: number }; // posição na tela
  size: { width: number; height: number }; // seu tamanho na tela
}

export interface WindowConfig {
  id: WindowId;
  title: string;
  icon: string;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
}
