import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocherAddComponent } from './vocher-add.component';

describe('VocherAddComponent', () => {
  let component: VocherAddComponent;
  let fixture: ComponentFixture<VocherAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocherAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
