import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfigComponent } from './car-config.component';

describe('CarConfigComponent', () => {
  let component: CarConfigComponent;
  let fixture: ComponentFixture<CarConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
