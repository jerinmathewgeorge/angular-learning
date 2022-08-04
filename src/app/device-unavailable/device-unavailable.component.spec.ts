import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceUnavailableComponent } from './device-unavailable.component';

describe('DeviceUnavailableComponent', () => {
  let component: DeviceUnavailableComponent;
  let fixture: ComponentFixture<DeviceUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceUnavailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
