import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Giftcode4uComponent } from './giftcode4u.component';

describe('Giftcode4uComponent', () => {
  let component: Giftcode4uComponent;
  let fixture: ComponentFixture<Giftcode4uComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Giftcode4uComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Giftcode4uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
