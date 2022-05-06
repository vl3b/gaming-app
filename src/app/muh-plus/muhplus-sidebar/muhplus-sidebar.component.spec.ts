import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhplusSidebarComponent } from './muhplus-sidebar.component';

describe('MuhplusSidebarComponent', () => {
  let component: MuhplusSidebarComponent;
  let fixture: ComponentFixture<MuhplusSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuhplusSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuhplusSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
