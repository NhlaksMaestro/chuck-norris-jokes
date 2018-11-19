import { Component, OnInit, Input } from '@angular/core';
import { FreeTextModel } from 'src/app/shared/free-text.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() freeTextResults: FreeTextModel;

  constructor() {
    this.freeTextResults = new FreeTextModel();
   }

  ngOnInit() {
  }

}
