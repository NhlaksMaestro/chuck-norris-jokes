import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  show = false;
  private subscription: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    // this.subscription = this.spinnerService.visibility
    // .subscribe((state: LoaderState) => {
    //   this.show = state.show;
    // });
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
