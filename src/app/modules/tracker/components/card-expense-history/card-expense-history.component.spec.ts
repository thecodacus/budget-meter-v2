import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpenseHistoryComponent } from './card-expense-history.component';

describe('CardExpenseHistoryComponent', () => {
  let component: CardExpenseHistoryComponent;
  let fixture: ComponentFixture<CardExpenseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExpenseHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExpenseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
