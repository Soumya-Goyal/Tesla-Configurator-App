import { TestBed } from '@angular/core/testing';

import { CarConfiguratorService } from './car-configurator.service';

describe('CarConfiguratorService', () => {
  let service: CarConfiguratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarConfiguratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
