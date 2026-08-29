import { Component, inject } from '@angular/core';
import { WindowService } from './../core/services/window-service';
import { Icon } from './icon/icon';
import { WindowId } from '../core/models/window-model';
import { Window } from './window/window';
import { Taskbar } from './taskbar/taskbar';
import { SobreMim } from '../windows/sobre-mim/sobre-mim';
import { Projetos } from '../windows/projetos/projetos';
import { Contato } from '../windows/contato/contato';
import { Curriculo } from '../windows/curriculo/curriculo';
import { RedesSociais } from '../windows/redes-sociais/redes-sociais';

@Component({
  selector: 'app-desktop',
  imports: [Icon, Window, Taskbar, SobreMim, Projetos, Contato, Curriculo, RedesSociais], 
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
