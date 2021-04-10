import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailcampaignComponent } from './mailcampaign.component';

describe('MailcampaignComponent', () => {
  let component: MailcampaignComponent;
  let fixture: ComponentFixture<MailcampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailcampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
