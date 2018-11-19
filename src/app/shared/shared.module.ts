import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { JokeComponent } from './joke/joke.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [TopNavComponent, JokeComponent, SpinnerComponent],
  exports: [TopNavComponent, JokeComponent, SpinnerComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
