import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientDetailsComponent } from './add-client-details.component';

describe('AddClientDetailsComponent', () => {
  let component: AddClientDetailsComponent;
  let fixture: ComponentFixture<AddClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
