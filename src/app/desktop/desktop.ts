import { Component, inject } from '@angular/core';
import { WindowService } from './../core/services/window-service';
import { Icon } from './icon/icon';
import { WindowId } from '../core/models/window-model';

@Component({
  selector: 'app-desktop',
  imports: [Icon], // window.component entra aqui na parte 4
  templateUrl: './desktop.html',
})
export class Desktop {
  protected windowService = inject(WindowService);
  protected selectedIcon: WindowId | null = null;

  selectIcon(id: WindowId): void {
    this.selectedIcon = id;
  }

  clearSelection(): void {
    this.selectedIcon = null;
  }
}
