import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThirdPartiesComponent } from './third-parties.component';

const routes: Routes = [{ path: "", component: ThirdPartiesComponent }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThirdPartiesModule { }
