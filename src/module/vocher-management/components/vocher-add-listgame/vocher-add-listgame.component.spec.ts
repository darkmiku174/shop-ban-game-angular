import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocherAddListgameComponent } from './vocher-add-listgame.component';

describe('VocherAddListgameComponent', () => {
  let component: VocherAddListgameComponent;
  let fixture: ComponentFixture<VocherAddListgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocherAddListgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocherAddListgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
