import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardValueComponent } from './card-value/card-value.component';
import { CardBudgetSummaryComponent } from './card-budget-summary/card-budget-summary.component';
import { CardExpenseAnalysisComponent } from './card-expense-analysis/card-expense-analysis.component';
import { CardExpenseHistoryComponent } from './card-expense-history/card-expense-history.component';
import { CardTransactionHistoryComponent } from './card-transaction-history/card-transaction-history.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardBlankComponent } from './card-blank/card-blank.component';



@NgModule({
  declarations: [
    CardValueComponent,
    CardBudgetSummaryComponent,
    CardExpenseAnalysisComponent,
    CardExpenseHistoryComponent,
    CardTransactionHistoryComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardBlankComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardValueComponent,
    CardBudgetSummaryComponent,
    CardExpenseAnalysisComponent,
    CardExpenseHistoryComponent,
    CardTransactionHistoryComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent
  ]
})
export class ComponentsModule { }
