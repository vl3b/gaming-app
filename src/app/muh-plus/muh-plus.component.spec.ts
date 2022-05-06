import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhPlusComponent } from './muh-plus.component';

describe('MuhPlusComponent', () => {
  let component: MuhPlusComponent;
  let fixture: ComponentFixture<MuhPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuhPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuhPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
