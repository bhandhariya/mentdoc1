import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTestimonialComponent } from './price-testimonial.component';

describe('PriceTestimonialComponent', () => {
  let component: PriceTestimonialComponent;
  let fixture: ComponentFixture<PriceTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
