import { Component, OnInit } from '@angular/core';
import { ChuckNorrisApiService } from 'src/app/shared/chuck-norris-api.service';
import { FreeTextModel } from 'src/app/shared/free-text.model';
import { JokeModel } from 'src/app/shared/joke.model';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  animations: [
    trigger('flipFlop', [
      state('flip', style({ transform: 'rotateY(179.9deg)' })),
      state('flop', style({ transform: 'rotateY(0)' })),
      transition('flip => flop', animate('500ms ease-out')),
      transition('flop => flip', animate('500ms ease-in'))
    ])
  ]
})
export class RandomComponent implements OnInit {
  retrievedJoke: JokeModel;
  randomNumber: number;
  flipFlop = 'flip';
  constructor(private readonly chuckNorrisApiService: ChuckNorrisApiService) {
    this.retrievedJoke = new JokeModel();
    this.randomNumber = this.generateRandomNumber(1, 7);
  }
  ngOnInit() {}
  toggleFlipFlop() {
    this.flipFlop = (this.flipFlop === 'flop') ? 'flip' : 'flop';
  }
  retrieveRandomJoke() {
    this.chuckNorrisApiService.getRandomChuckNorrisJoke().subscribe(
      (data: JokeModel) => {
        this.retrievedJoke = data || new JokeModel();
        console.log('this.retrievedJoke', this.retrievedJoke);
      },
      error => {
        console.log(`error: ${error}`);
      },
      () => {
        this.randomNumber = this.generateRandomNumber(1, 7);
      }
    );
  }
  private generateRandomNumber(min: number, max: number): number {
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
  }
}
