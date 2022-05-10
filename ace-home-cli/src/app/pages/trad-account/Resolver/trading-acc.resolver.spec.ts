import { TestBed } from '@angular/core/testing';

import { TradingAccResolver } from './trading-acc.resolver';

describe('TradingAccResolver', () => {
  let resolver: TradingAccResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TradingAccResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
