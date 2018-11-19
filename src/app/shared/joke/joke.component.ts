import { Component, OnInit, Input } from '@angular/core';
import { JokeModel } from '../joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() jokeModel: JokeModel;
  isLoading: boolean;
  isSpinning: boolean;

  constructor() {
    this.isSpinning = false;
  }

  ngOnInit() {
  }

}
