import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAddKeyComponent } from './games-add-key.component';

describe('GamesAddKeyComponent', () => {
  let component: GamesAddKeyComponent;
  let fixture: ComponentFixture<GamesAddKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesAddKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAddKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
