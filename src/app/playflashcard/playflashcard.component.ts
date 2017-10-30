import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';

export class FlashCard {
  id: string;
  faceA: string;
  faceB: string;
  flashCardCategoryId: string;
  flashCardCategoryName: string;
  userEmail: string;
  displayOrder: number;
  viewNumber: number;
}

@Component({
  selector: 'app-playflashcard',
  templateUrl: './playflashcard.component.html',
  styleUrls: ['./playflashcard.component.scss']
})
export class PlayflashcardComponent implements OnInit {

  flashcards: FlashCard[];
  showFlashCard: FlashCard;
  total;
  autoTicks = false;
  disabled = false;
  invert = false;
  max;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 1;
  vertical = false;
  nextStep = true;
  togglerFlip = false;
  constructor(
    private location: Location,
    private flashCardService: FlashcardService
  ) { }

  ngOnInit() {
    this.flashCardService.interactDB(Method.GET,
      `http://osdintern2.azurewebsites.net/Flashcards`,
      '').subscribe(res => {
        this.flashcards = res;
        this.showFlashCard = res[0];
        this.total = this.flashcards.length;
        this.max = this.total;
      });
  }

  previous() {
    this.togglerFlip = false;
    this.value = this.value - 1;
    const count = this.value - 1;
    this.showContent(count);
    this.nextStep = false;

  }
  next() {
    this.togglerFlip = false;
    this.showContent(this.value++);
    this.nextStep = true;
  }

  changeValue(value) {
    this.showFlashCard = this.flashcards[value - 1];
  }

  toggleFlip() {
    this.togglerFlip = !this.togglerFlip;
  }

  showContent(value) {
    this.showFlashCard = this.flashcards[value];
  }

  shuffle(value) {
    const resultRadom = Math.floor((Math.random() * this.total) + 0);
    this.showFlashCard = this.flashcards[resultRadom];
    this.value = resultRadom + 1;
  }

  goBack() {
    this.location.back();
  }
}
