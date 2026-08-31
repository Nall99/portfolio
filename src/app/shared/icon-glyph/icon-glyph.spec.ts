import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconGlyph } from './icon-glyph';

describe('IconGlyph', () => {
  let component: IconGlyph;
  let fixture: ComponentFixture<IconGlyph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconGlyph],
    }).compileComponents();

    fixture = TestBed.createComponent(IconGlyph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
