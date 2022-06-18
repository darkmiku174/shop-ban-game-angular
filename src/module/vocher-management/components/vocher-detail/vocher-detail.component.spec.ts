import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocherDetailComponent } from './vocher-detail.component';

describe('VocherDetailComponent', () => {
  let component: VocherDetailComponent;
  let fixture: ComponentFixture<VocherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocherDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
