import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBudgetSummaryComponent } from './card-budget-summary.component';

describe('CardBudgetSummaryComponent', () => {
  let component: CardBudgetSummaryComponent;
  let fixture: ComponentFixture<CardBudgetSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBudgetSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBudgetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
