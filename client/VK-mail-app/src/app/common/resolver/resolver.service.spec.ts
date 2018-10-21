/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResolverService } from './resolver.service';

describe('ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolverService]
    });
  });

  it('should ...', inject([ResolverService], (service: ResolverService) => {
    expect(service).toBeTruthy();
  }));
});
