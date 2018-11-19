import { Component, OnInit, Input } from '@angular/core';
import { ChuckNorrisApiService } from 'src/app/shared/chuck-norris-api.service';
import { JokeModel } from 'src/app/shared/joke.model';
import { CategoryListModel } from 'src/app/shared/category-list.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [
    trigger('spinStop', [
      state('spin', style({ transform: 'rotate(360deg)' })),
      state('stop', style({ transform: 'rotate(0)' })),
      transition('spin => stop', animate('2s linear'))
  ])
  ]

})
export class CategoryComponent implements OnInit {
  @Input() category: CategoryListModel;
  @Input() position: number;
  retrievedJoke: JokeModel;
  showDialog = false;
  isLoading: boolean;
  spin = false;

  constructor(private readonly chuckNorrisApiService: ChuckNorrisApiService) {
    this.showDialog = false;
    this.isLoading = true;
  }

  ngOnInit() {}
  viewJoke(): void {
    this.getRandomCategoryJoke(this.category.CategoryName);
  }
  closeJoke(): void {
    this.showDialog = false;
  }
  imageLoaded(): void {
    this.isLoading = false;
  }
  getRandomCategoryJoke(categoryName: string): void {
    this.spin = true;
    this.chuckNorrisApiService
      .getRandomChuckNorrisJokeForGivenCategory(categoryName)
      .subscribe(
        (data: JokeModel) => {
          this.retrievedJoke = data || new JokeModel();
          console.log('this.retrievedJoke', this.retrievedJoke);
        },
        error => {
          console.log(`error: ${error}`);
        },
        () => {
          this.showDialog = true;
          this.spin = false;
        }
      );
  }
}
