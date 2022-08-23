import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './tracker.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: TrackerComponent,
    children: [
      { path: "", loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: "transactions", loadChildren: () => import('./pages/transactions/transactions.module').then(m => m.TransactionsModule) },
      { path: "accounts", loadChildren: () => import('./pages/accounts/accounts.module').then(m => m.AccountsModule) },
      { path: "thirs-parties", loadChildren: () => import('./pages/third-parties/third-parties.module').then(m => m.ThirdPartiesModule) }
    ]
  }
]

@NgModule({
  declarations: [
    TrackerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TrackerModule { }
