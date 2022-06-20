import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePaymentComponent } from './game-payment.component';

describe('GamePaymentComponent', () => {
  let component: GamePaymentComponent;
  let fixture: ComponentFixture<GamePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
