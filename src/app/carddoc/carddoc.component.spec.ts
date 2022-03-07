import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddocComponent } from './carddoc.component';

describe('CarddocComponent', () => {
  let component: CarddocComponent;
  let fixture: ComponentFixture<CarddocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
