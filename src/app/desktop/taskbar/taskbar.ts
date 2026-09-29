import { Component, inject, signal, DestroyRef, afterNextRender } from '@angular/core';
import { WindowService } from '../../core/services/window-service';
import { WindowId } from '../../core/models/window-model';
import { IconGlyph } from '../../shared/icon-glyph/icon-glyph';
import { SoundService } from '../../core/services/sound-service';

@Component({
  selector: 'app-taskbar',
  imports: [IconGlyph],
  templateUrl: './taskbar.html',
})
export class Taskbar {
  protected windowService = inject(WindowService);
  protected isStartOpen = signal(false);
  protected clock = signal('--:--');
  protected selectedIcon: WindowId | null = null;
  protected sound = inject(SoundService);

  private destroyRef = inject(DestroyRef);

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
    this.sound.tocar('click');
    this.isStartOpen.update(v => !v);
  }

  closeStart(): void {
    this.sound.tocar('click');
    this.isStartOpen.set(false);
  }

  onTaskClick(id: WindowId): void {
    this.sound.tocar('click');
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
