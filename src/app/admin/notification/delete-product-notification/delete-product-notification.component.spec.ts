import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductNotificationComponent } from './delete-product-notification.component';

describe('DeleteProductNotificationComponent', () => {
  let component: DeleteProductNotificationComponent;
  let fixture: ComponentFixture<DeleteProductNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
