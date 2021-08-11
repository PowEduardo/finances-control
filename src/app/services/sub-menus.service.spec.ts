import { TestBed } from '@angular/core/testing';

import { SubMenusService } from './sub-menus.service';

describe('SubMenusService', () => {
  let service: SubMenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubMenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
