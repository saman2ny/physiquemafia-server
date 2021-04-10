import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from 'src/guards/auth-guard.service';
import { ShowDatePipe } from 'src/pipes/show-date.pipe';
import { SafePipe } from 'src/pipes/safe.pipe';
import { SharedModule } from 'src/shared/shared.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';


import { MultiSelectModule } from 'primeng/multiselect';

// import {
//   AppAsideModule,
//   AppBreadcrumbModule,
//   AppHeaderModule,
//   AppFooterModule,
//   AppSidebarModule,
// } from '@coreui/angular';


@NgModule({
  // declarations: [],
  imports: [
    CommonModule,
    GoogleChartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingPageComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
         
          {
            path: 'send-mail',
            loadChildren: () => import('src/pages/sendmail/sendmail.module').
              then((({ SendmailModule }) => SendmailModule))
          },
          {
            path: 'client-user',
            loadChildren: () => import('src/pages/client-user/client-user.module').
              then((({ ClientUserModule }) => ClientUserModule))
          }

        ],
        // canActivate: [AuthGuard]
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    SharedModule,
    NgxIntlTelInputModule


  ],

  declarations: [DashboardComponent, LandingPageComponent]
})


export class HomeModule { }