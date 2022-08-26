import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTransactionHistoryComponent } from './card-transaction-history.component';

describe('CardTransactionHistoryComponent', () => {
  let component: CardTransactionHistoryComponent;
  let fixture: ComponentFixture<CardTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTransactionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
