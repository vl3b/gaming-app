import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOAComponent } from './hoa.component';

describe('HOAComponent', () => {
  let component: HOAComponent;
  let fixture: ComponentFixture<HOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HOAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
