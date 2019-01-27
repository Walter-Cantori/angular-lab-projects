import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  loading: boolean = false;

  constructor(private spinnerService: SpinnerService) {

  }

  ngOnInit() {
    this.spinnerService.loadingEvent.subscribe((isLoading: boolean) => this.loading = isLoading);
  }

}
