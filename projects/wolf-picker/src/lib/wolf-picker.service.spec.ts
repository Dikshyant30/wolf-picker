import { TestBed } from '@angular/core/testing';

import { WolfPickerService } from './wolf-picker.service';

describe('WolfPickerService', () => {
  let service: WolfPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WolfPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
