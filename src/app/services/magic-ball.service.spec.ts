import { TestBed } from '@angular/core/testing';

import { MagicBallService } from './magic-ball.service';

describe('MagicBallService', () => {
  let service: MagicBallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicBallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

