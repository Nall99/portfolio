import { Service, signal, computed } from '@angular/core';
import { AppWindow, WindowConfig, WindowId } from '../models/window-model';

const REGISTRY: WindowConfig[] = [
  { id: 'sobre-mim', title: 'Sobre mim.txt', icon: 'user', defaultPosition: { x: 130, y: 70 }, defaultSize: { width: 520, height: 480 } },
  { id: 'projetos', title: 'Projetos', icon: 'folder', defaultPosition: { x: 190, y: 90 }, defaultSize: { width: 600, height: 460 } },
  { id: 'contato', title: 'Contato', icon: 'mail', defaultPosition: { x: 250, y: 110 }, defaultSize: { width: 420, height: 440 } },
  { id: 'curriculo', title: 'curriculo.pdf', icon: 'file', defaultPosition: { x: 310, y: 80 }, defaultSize: { width: 460, height: 250 } },
  { id: 'redes-sociais', title: 'Redes sociais', icon: 'globe', defaultPosition: { x: 370, y: 130 }, defaultSize: { width: 400, height: 420 } },
];

@Service()
export class WindowService {
  private readonly _windows = signal<AppWindow[]>(
    REGISTRY.map((cfg, i) => ({
      id: cfg.id,
      title: cfg.title,
      icon: cfg.icon,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10 + i,
      position: cfg.defaultPosition ?? { x: 100 + i * 30, y: 80 + i * 20 },
      size: cfg.defaultSize ?? { width: 480, height: 420 },
    }))
  );

  readonly windows = this._windows.asReadonly();
  readonly openWindows = computed(() => this._windows().filter(w => w.isOpen));
  readonly activeWindowId = signal<WindowId | null>(null);

  private topZ = 20;

  open(id: WindowId): void {
    this.update(id, w => ({ ...w, isOpen: true, isMinimized: false }));
    this.focus(id);
  }

  close(id: WindowId): void {
    this.update(id, w => ({ ...w, isOpen: false, isMinimized: false }));
    if (this.activeWindowId() === id) this.activeWindowId.set(null);
  }

  minimize(id: WindowId): void {
    this.update(id, w => ({ ...w, isMinimized: true }));
  }

  toggleMaximize(id: WindowId): void {
    this.update(id, w => ({ ...w, isMaximized: !w.isMaximized }));
    this.focus(id);
  }

  focus(id: WindowId): void {
    this.topZ++;
    this.activeWindowId.set(id);
    this.update(id, w => ({ ...w, zIndex: this.topZ }));
  }

  move(id: WindowId, position: { x: number; y: number }): void {
    this.update(id, w => ({ ...w, position }));
  }

  private update(id: WindowId, fn: (w: AppWindow) => AppWindow): void {
    this._windows.update(list => list.map(w => (w.id === id ? fn(w) : w)));
  }
}
