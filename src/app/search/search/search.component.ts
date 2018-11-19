import { Component, OnInit } from '@angular/core';
import { FreeTextModel } from 'src/app/shared/free-text.model';
import { ChuckNorrisApiService } from 'src/app/shared/chuck-norris-api.service';

import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { SpinnerService } from '../../shared/spinner/spinner.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  freeTextSearch = new FormControl('');
  columnNames: string[];
  freeTextSearchResults: FreeTextModel;
  isLoading: boolean;

  constructor(
    private readonly spinnerService: SpinnerService,
    private readonly _chuckNorrisApiService: ChuckNorrisApiService) {
      this.isLoading = false;
    }

  ngOnInit() {
    this
    .freeTextSearch
    .valueChanges
    .pipe(debounceTime(500))
    .pipe(distinctUntilChanged())
    .pipe(switchMap(term => this
        ._chuckNorrisApiService
        .getChuckNorrisJokeUsingFreeText(term)
    ))
    .subscribe((searchResults: FreeTextModel) => {
        this.freeTextSearchResults = searchResults;
      });
  }
}
