import { UserTransactionsLogComponent } from './user-transactions-log/user-transactions-log.component';
import { Routes } from "@angular/router";

import { AnalyticsComponent } from "./analytics/analytics.component";
import { EnrollmentComponent } from "./enrollment/enrollment.component";
import { CheckStatusComponent } from "./checkStatus/checkStatus.component";
import { ProfileComponent } from './profile/profile.component';
import { LinksComponent } from './links/links.component';
import { UserResolver } from 'app/services/authServices/user.resolver';

export const DashboardRoutes: Routes = [
  {
    path: "user/profile",
    component: ProfileComponent,
    data: { title: "profile", breadcrumb: "profile" },
  },
  {
    path: "user/links",
    component: LinksComponent,
    data: { title: "Links", breadcrumb: "links" },
    resolve: {user:UserResolver}
  },
   {
    path: ":username",
    component: LinksComponent,
    data: { title: "Links", breadcrumb: "links" },
   
  },
  {
    path: "checkstatus",
    component: CheckStatusComponent,
    data: { title: "CheckStatus", breadcrumb: "CheckStatus" },
  },
  {
    path: "user-transactions-log",
    component: UserTransactionsLogComponent,
    data: { title: "UserTransactionsLog", breadcrumb: "User-Transactions-Log" },
  },
];
