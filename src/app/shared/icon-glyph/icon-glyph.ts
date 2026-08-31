import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-icon-glyph',
  styleUrl: './icon-glyph.css',
  templateUrl: './icon-glyph.html',
})
export class IconGlyph {
  key = input.required<string>(); // 'user' | 'folder' | 'mail' | 'file' | 'globe'
}
