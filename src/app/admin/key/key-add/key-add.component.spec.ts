import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyAddComponent } from './key-add.component';

describe('KeyAddComponent', () => {
  let component: KeyAddComponent;
  let fixture: ComponentFixture<KeyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
