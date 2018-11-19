import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'random', component: RandomComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomRoutingModule { }
