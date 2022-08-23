import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "login", loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule) },
      { path: "register", loadChildren: () => import("./pages/register/register.module").then(m => m.RegisterModule) }
    ]
  }
]

@NgModule({
  declarations: [


    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
