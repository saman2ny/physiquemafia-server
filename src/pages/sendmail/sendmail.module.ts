import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { MailcampaignComponent } from './mailcampaign/mailcampaign.component';
import { AddchannelComponent } from './addchannel/addchannel.component';

const routes: Routes = [
  {
    path: 'list-channel',
    component:  MailcampaignComponent,

    
  },
  {
    path: 'add-channel',
    component:  AddchannelComponent,

    
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  declarations: [MailcampaignComponent, AddchannelComponent]

})
export class SendmailModule { }
