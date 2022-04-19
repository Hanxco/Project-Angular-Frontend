import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncategoriasComponent } from './gestioncategorias.component';

describe('GestioncategoriasComponent', () => {
  let component: GestioncategoriasComponent;
  let fixture: ComponentFixture<GestioncategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
