import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicarReferenceComponent } from './tabla-multiplicar-reference-component';

describe('TablaMultiplicarReferenceComponent', () => {
  let component: TablaMultiplicarReferenceComponent;
  let fixture: ComponentFixture<TablaMultiplicarReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarReferenceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarReferenceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
