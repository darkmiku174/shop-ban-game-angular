import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKeyNotificationComponent } from './delete-key-notification.component';

describe('DeleteKeyNotificationComponent', () => {
  let component: DeleteKeyNotificationComponent;
  let fixture: ComponentFixture<DeleteKeyNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteKeyNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteKeyNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
