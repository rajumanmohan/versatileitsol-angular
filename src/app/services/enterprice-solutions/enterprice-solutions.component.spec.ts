import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriceSolutionsComponent } from './enterprice-solutions.component';

describe('EnterpriceSolutionsComponent', () => {
  let component: EnterpriceSolutionsComponent;
  let fixture: ComponentFixture<EnterpriceSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriceSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriceSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
