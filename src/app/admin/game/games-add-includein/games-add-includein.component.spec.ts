import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAddIncludeinComponent } from './games-add-includein.component';

describe('GamesAddIncludeinComponent', () => {
  let component: GamesAddIncludeinComponent;
  let fixture: ComponentFixture<GamesAddIncludeinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesAddIncludeinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAddIncludeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
