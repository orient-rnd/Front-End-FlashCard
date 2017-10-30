import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefalshcardComponent } from './createfalshcard.component';

describe('CreatefalshcardComponent', () => {
  let component: CreatefalshcardComponent;
  let fixture: ComponentFixture<CreatefalshcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatefalshcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefalshcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
