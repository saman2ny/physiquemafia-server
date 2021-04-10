import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { ClientDetailsComponent } from './client-details/client-details.component';



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
    InfiniteScrollModule
  ],
  declarations: [ClientDetailsComponent]

})
export class ClientUserModule { }
