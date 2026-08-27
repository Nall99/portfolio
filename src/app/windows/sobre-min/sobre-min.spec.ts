import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreMin } from './sobre-min';

describe('SobreMin', () => {
  let component: SobreMin;
  let fixture: ComponentFixture<SobreMin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMin],
    }).compileComponents();

    fixture = TestBed.createComponent(SobreMin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
