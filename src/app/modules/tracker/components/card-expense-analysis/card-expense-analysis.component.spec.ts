import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpenseAnalysisComponent } from './card-expense-analysis.component';

describe('CardExpenseAnalysisComponent', () => {
  let component: CardExpenseAnalysisComponent;
  let fixture: ComponentFixture<CardExpenseAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExpenseAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExpenseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
