import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitakComponent } from './digitak.component';

describe('DigitakComponent', () => {
  let component: DigitakComponent;
  let fixture: ComponentFixture<DigitakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
