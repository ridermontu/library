/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddbookService } from './addbook.service';

describe('AddbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddbookService]
    });
  });

  it('should ...', inject([AddbookService], (service: AddbookService) => {
    expect(service).toBeTruthy();
  }));
});
