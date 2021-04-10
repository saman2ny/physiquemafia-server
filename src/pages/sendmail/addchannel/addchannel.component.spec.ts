import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchannelComponent } from './addchannel.component';

describe('AddchannelComponent', () => {
  let component: AddchannelComponent;
  let fixture: ComponentFixture<AddchannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddchannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
