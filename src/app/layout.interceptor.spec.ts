import { TestBed } from '@angular/core/testing';

import { LayoutInterceptor } from './layout.interceptor';

describe('LayoutInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LayoutInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LayoutInterceptor = TestBed.inject(LayoutInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
