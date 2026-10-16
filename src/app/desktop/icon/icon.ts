import { Component, inject, input, output } from '@angular/core';
import { WindowId } from '../../core/models/window-model';
import { IconGlyph } from "../../shared/icon-glyph/icon-glyph";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  imports: [IconGlyph],
})
export class Icon {

  windowId = input.required<WindowId>();
  label = input.required<string>();
  iconKey = input.required<string>();
  selected = input(false);

  select = output<WindowId>();
  open = output<WindowId>();

  abrir(): void{
    this.select.emit(this.windowId());
    this.open.emit(this.windowId())
  }
}
