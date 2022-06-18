import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocherManagementComponent } from './vocher-management.component';

describe('VocherManagementComponent', () => {
  let component: VocherManagementComponent;
  let fixture: ComponentFixture<VocherManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocherManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocherManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
