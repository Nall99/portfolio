import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { DragDropModule, CdkDragEnd } from '@angular/cdk/drag-drop';
import { WindowService } from '../../core/services/window-service';
import { AppWindow } from '../../core/models/window-model';
import { IconGlyph } from "../../shared/icon-glyph/icon-glyph";

@Component({
  imports: [DragDropModule, IconGlyph],
  selector: 'app-window',
  styleUrl: './window.css',
  templateUrl: './window.html',
})
export class Window implements OnInit{
  private windowService = inject(WindowService);
  protected mounted = signal(false);
  ngOnInit(): void {
    requestAnimationFrame(() => this.mounted.set(true));
  }


  win = input.required<AppWindow>();
  isActive = computed(() => this.windowService.activeWindowId() === this.win().id);

  onFocus(): void {
    this.windowService.focus(this.win().id);
  }

  onDragEnded(event: CdkDragEnd): void {
    const pos = event.source.getFreeDragPosition();
    this.windowService.move(this.win().id, { x: pos.x, y: pos.y });
  }

  minimize(event: MouseEvent): void {
    event.stopPropagation();
    this.windowService.minimize(this.win().id);
  }

  toggleMaximize(event: MouseEvent): void {
    event.stopPropagation();
    this.windowService.toggleMaximize(this.win().id);
  }

  close(event: MouseEvent): void {
    event.stopPropagation();
    this.windowService.close(this.win().id);
  }
}
