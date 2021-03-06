import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./pages/home/home.module#HomePageModule"
  },
  {
    path: "list",
    loadChildren: "./pages/list/list.module#ListPageModule"
  },
  { path: "flex", loadChildren: "./pages/flex/flex.module#FlexPageModule" },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  {
    path: "register",
    loadChildren: "./pages/register/register.module#RegisterPageModule"
  },
  { path: "pelis", loadChildren: "./pages/pelis/pelis.module#PelisPageModule" },
  {
    path: "pelis/:id",
    loadChildren: "./pages/pelis/details/details.module#DetailsPageModule"
  },
  { path: 'cronometro', loadChildren: './pages/cronometro/cronometro.module#CronometroPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
