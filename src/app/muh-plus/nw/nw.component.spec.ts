import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NWComponent } from './nw.component';

describe('NWComponent', () => {
  let component: NWComponent;
  let fixture: ComponentFixture<NWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
