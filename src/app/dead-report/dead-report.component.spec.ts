import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadReportComponent } from './dead-report.component';

describe('DeadReportComponent', () => {
  let component: DeadReportComponent;
  let fixture: ComponentFixture<DeadReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
