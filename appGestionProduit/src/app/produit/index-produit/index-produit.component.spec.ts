import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProduitComponent } from './index-produit.component';

describe('IndexProduitComponent', () => {
  let component: IndexProduitComponent;
  let fixture: ComponentFixture<IndexProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
