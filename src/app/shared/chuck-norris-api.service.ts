import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeModel } from './joke.model';
import { HttpClient } from '@angular/common/http';
import { FreeTextModel } from './free-text.model';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisApiService {
  private chucknorrisApiri: string;
  constructor(private readonly httpClient: HttpClient) {
    this.chucknorrisApiri  = 'https://api.chucknorris.io/jokes';
  }

  getRandomChuckNorrisJoke(): Observable<JokeModel> {
    return this.httpClient.get<JokeModel>(`${this.chucknorrisApiri}/random`);
  }
  getChuckNorrisJokeCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.chucknorrisApiri}/categories`);
  }
  getChuckNorrisJokeUsingFreeText(freeText: Observable<string>): Observable<FreeTextModel> {
    return this.httpClient.get<FreeTextModel>(`${this.chucknorrisApiri}/search?query=${freeText}`);
  }
  getRandomChuckNorrisJokeForGivenCategory(category: string): Observable<JokeModel> {
    return this.httpClient.get<JokeModel>(`${this.chucknorrisApiri}/random?category=${category}`);
  }
}
