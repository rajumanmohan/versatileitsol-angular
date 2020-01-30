import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoFounderComponent } from './co-founder.component';

describe('CoFounderComponent', () => {
  let component: CoFounderComponent;
  let fixture: ComponentFixture<CoFounderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoFounderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoFounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
