import { TestBed } from '@angular/core/testing';

import { MessageRealService } from './message-real.service';

describe('MessageRealService', () => {
  let service: MessageRealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageRealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
