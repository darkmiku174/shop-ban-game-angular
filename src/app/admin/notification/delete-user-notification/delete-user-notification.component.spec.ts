import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserNotificationComponent } from './delete-user-notification.component';

describe('DeleteUserNotificationComponent', () => {
  let component: DeleteUserNotificationComponent;
  let fixture: ComponentFixture<DeleteUserNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
