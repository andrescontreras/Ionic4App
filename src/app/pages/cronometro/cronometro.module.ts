import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgCircleProgressModule } from "ng-circle-progress";

import { IonicModule } from "@ionic/angular";

import { CronometroPage } from "./cronometro.page";
import { Insomnia } from "@ionic-native/insomnia/ngx";

const routes: Routes = [
  {
    path: "",
    component: CronometroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  declarations: [CronometroPage],
  providers: [Insomnia]
})
export class CronometroPageModule {}
