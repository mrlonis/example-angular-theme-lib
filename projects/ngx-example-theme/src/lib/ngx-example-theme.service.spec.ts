import { TestBed } from '@angular/core/testing';
import { NgxExampleThemeService } from './ngx-example-theme.service';

describe('NgxExampleThemeService', () => {
  let service: NgxExampleThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxExampleThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
