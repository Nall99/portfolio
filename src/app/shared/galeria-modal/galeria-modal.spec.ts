import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaModal } from './galeria-modal';

describe('GaleriaModal', () => {
  let component: GaleriaModal;
  let fixture: ComponentFixture<GaleriaModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaModal],
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
