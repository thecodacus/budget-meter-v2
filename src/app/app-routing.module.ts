import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "auth", loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule) },
  { path: "dashboard", loadChildren: () => import("./modules/tracker/tracker.module").then(m => m.TrackerModule) },
  { path: "404", loadChildren: () => import("./core/pages/404/error404.module").then(m => m.Error404Module) },
  { path: "500", loadChildren: () => import("./core/pages/500/error500.module").then(m => m.Error500Module) },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
