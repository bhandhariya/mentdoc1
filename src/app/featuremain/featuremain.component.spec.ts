import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturemainComponent } from './featuremain.component';

describe('FeaturemainComponent', () => {
  let component: FeaturemainComponent;
  let fixture: ComponentFixture<FeaturemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
