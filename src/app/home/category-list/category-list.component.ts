import { Component, OnInit } from '@angular/core';
import { ChuckNorrisApiService } from '../../shared/chuck-norris-api.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';
import { CategoryListModel } from 'src/app/shared/category-list.model';
import { JokeModel } from 'src/app/shared/joke.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          left: '0px'
        })
      ),
      state(
        'closed',
        style({
          left: '-100%'
        })
      ),
      transition('closed => open', [animate('1s ease-out')])
    ])
  ]
})
export class CategoryListComponent implements OnInit {
  categoriesList: CategoryListModel[];
  isOpen = false;

  constructor(private readonly chuckNorrisService: ChuckNorrisApiService) {
  }
  ngOnInit() {
    this.categoriesList = [];
    this.getCategories();
  }

  getCategories(): void {
    this.chuckNorrisService.getChuckNorrisJokeCategories().subscribe(
      data => {
        this.categoriesList = data.map((value: string, index: number) => {
          index++;
          const categoryListModel = new CategoryListModel();
          categoryListModel.CategoryName = value;
          categoryListModel.CategoryImageSource = `url(../../../assets/cn${index}.jpeg)`;
          return categoryListModel;
        }) || [];
        console.log('this.categoriesList', this.categoriesList);
      },
      error => {
        console.log(`error: ${error}`);
      },
      () => {
        this.isOpen = true;
      }
    );
  }
}
