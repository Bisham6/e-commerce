import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdudDetailComponent } from './produd-detail.component';

describe('ProdudDetailComponent', () => {
  let component: ProdudDetailComponent;
  let fixture: ComponentFixture<ProdudDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdudDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdudDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
