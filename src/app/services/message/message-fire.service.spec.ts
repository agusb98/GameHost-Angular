import { TestBed } from '@angular/core/testing';

import { MessageFireService } from './message-fire.service';

describe('MessageFireService', () => {
  let service: MessageFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
