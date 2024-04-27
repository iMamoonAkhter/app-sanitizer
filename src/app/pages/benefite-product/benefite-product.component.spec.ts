import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefiteProductComponent } from './benefite-product.component';

describe('BenefiteProductComponent', () => {
  let component: BenefiteProductComponent;
  let fixture: ComponentFixture<BenefiteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefiteProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BenefiteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
