import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOTSComponent } from './mots.component';

describe('MOTSComponent', () => {
  let component: MOTSComponent;
  let fixture: ComponentFixture<MOTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MOTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MOTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
