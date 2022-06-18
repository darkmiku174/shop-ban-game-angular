import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionAddListgameComponent } from './collection-add-listgame.component';

describe('CollectionAddListgameComponent', () => {
  let component: CollectionAddListgameComponent;
  let fixture: ComponentFixture<CollectionAddListgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionAddListgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionAddListgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
