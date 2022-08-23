import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error500Component } from './error500.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: "", component: Error500Component }]

@NgModule({
  declarations: [
    Error500Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Error500Module { }
