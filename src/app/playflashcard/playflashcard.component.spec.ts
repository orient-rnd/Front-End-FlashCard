import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayflashcardComponent } from './playflashcard.component';

describe('PlayflashcardComponent', () => {
  let component: PlayflashcardComponent;
  let fixture: ComponentFixture<PlayflashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayflashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayflashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
