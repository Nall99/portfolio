import { Component, inject, signal, DestroyRef, afterNextRender } from '@angular/core';
import { WindowService } from '../../core/services/window-service';
import { WindowId } from '../../core/models/window-model';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-taskbar',
  imports: [Icon],
  templateUrl: './taskbar.html',
})
export class Taskbar {
  protected windowService = inject(WindowService);
  protected isStartOpen = signal(false);
  protected clock = signal('--:--');
  private destroyRef = inject(DestroyRef);
  protected selectedIcon: WindowId | null = null;


  constructor() {
    afterNextRender(() => {
      this.clock.set(this.formatTime());
      const id = setInterval(() => this.clock.set(this.formatTime()), 10_000);
      this.destroyRef.onDestroy(() => clearInterval(id));
    });
  }
  selectIcon(id: WindowId): void {
    this.selectedIcon = id;
  }

  private formatTime(): string {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  toggleStart(): void {
    this.isStartOpen.update(v => !v);
  }

  closeStart(): void {
    this.isStartOpen.set(false);
  }

  onTaskClick(id: WindowId): void {
    const win = this.windowService.windows().find(w => w.id === id);
    if (!win) return;

    if (win.isMinimized) {
      this.windowService.open(id);
    } else if (this.windowService.activeWindowId() === id) {
      this.windowService.minimize(id);
    } else {
      this.windowService.focus(id);
    }
  }

  onMenuItemClick(id: WindowId): void {
    this.windowService.open(id);
    this.closeStart();
  }
}
