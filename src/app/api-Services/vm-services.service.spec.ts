import { TestBed } from '@angular/core/testing';

import { VmServicesService } from './vm-services.service';

describe('VmServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VmServicesService = TestBed.get(VmServicesService);
    expect(service).toBeTruthy();
  });
});
