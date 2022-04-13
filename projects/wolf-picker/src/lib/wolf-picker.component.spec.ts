import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfPickerComponent } from './wolf-picker.component';

describe('WolfPickerComponent', () => {
  let component: WolfPickerComponent;
  let fixture: ComponentFixture<WolfPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolfPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
