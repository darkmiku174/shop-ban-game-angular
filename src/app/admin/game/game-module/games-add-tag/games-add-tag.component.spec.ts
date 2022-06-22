import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAddTagComponent } from './games-add-tag.component';

describe('GamesAddTagComponent', () => {
  let component: GamesAddTagComponent;
  let fixture: ComponentFixture<GamesAddTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesAddTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAddTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
