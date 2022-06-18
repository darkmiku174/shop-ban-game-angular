import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCollectionNotificationComponent } from './delete-collection-notification.component';

describe('DeleteCollectionNotificationComponent', () => {
  let component: DeleteCollectionNotificationComponent;
  let fixture: ComponentFixture<DeleteCollectionNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCollectionNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCollectionNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
