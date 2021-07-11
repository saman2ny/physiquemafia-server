import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


import { ClientDetailsComponent } from './client-details/client-details.component';
import { AddClientDetailsComponent } from './add-client-details/add-client-details.component';



const routes: Routes = [
  {
    path: '',
    component:  ClientDetailsComponent,
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxIntlTelInputModule

  ],
  declarations: [ClientDetailsComponent, AddClientDetailsComponent]

})
export class ClientUserModule { }
