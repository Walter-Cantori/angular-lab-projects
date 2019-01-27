import { EventEmitter } from "@angular/core";

export class SpinnerService {

  loadingEvent = new EventEmitter<boolean>();

  public setLoading(isLoading) {
    this.loadingEvent.emit(isLoading);
  }
}
