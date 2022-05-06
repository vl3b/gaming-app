import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDComponent } from './sd.component';

describe('SDComponent', () => {
  let component: SDComponent;
  let fixture: ComponentFixture<SDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
