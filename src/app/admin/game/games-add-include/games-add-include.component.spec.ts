import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAddIncludeComponent } from './games-add-include.component';

describe('GamesAddIncludeComponent', () => {
  let component: GamesAddIncludeComponent;
  let fixture: ComponentFixture<GamesAddIncludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesAddIncludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAddIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
