import { SharedMaterialModule } from "app/shared/shared-material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgChartsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { SharedPipesModule } from "app/shared/pipes/shared-pipes.module";
import { DashboardRoutes } from "./dashboard.routing";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { EnrollmentComponent } from "./enrollment/enrollment.component";
import { CheckStatusComponent } from "./checkStatus/checkStatus.component";
import { UserTransactionsLogComponent } from "./user-transactions-log/user-transactions-log.component";
import { ProfileComponent } from './profile/profile.component';
import { LinksComponent } from './links/links.component';
import { AddlinkComponent } from './links/addlink/addlink.component';
import { A } from "@angular/cdk/keycodes";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AddlinkComponent,
    NgChartsModule,
    SharedMaterialModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    SharedPipesModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [AnalyticsComponent, EnrollmentComponent, CheckStatusComponent, UserTransactionsLogComponent],
  exports: [AddlinkComponent],
})
export class DashboardModule {}
