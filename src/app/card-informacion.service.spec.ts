import { TestBed } from '@angular/core/testing';

import { CardInformacionService } from './card-informacion.service';

describe('CardInformacionService', () => {
  let service: CardInformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardInformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
