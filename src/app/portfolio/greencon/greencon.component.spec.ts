import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenconComponent } from './greencon.component';

describe('GreenconComponent', () => {
  let component: GreenconComponent;
  let fixture: ComponentFixture<GreenconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
