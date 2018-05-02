import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomedetailsformComponent } from './income-details-form.component';

describe('IncomedetailsformComponent', () => {
  let component: IncomedetailsformComponent;
  let fixture: ComponentFixture<IncomedetailsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomedetailsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomedetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
