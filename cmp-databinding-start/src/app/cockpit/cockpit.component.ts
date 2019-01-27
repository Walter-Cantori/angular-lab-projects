import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../server.model';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<Server>();
  // newServerName = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    const server = new Server(nameInput.value, this.serverContentInput.nativeElement.value)
    this.serverCreated.emit(server);
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    const server = new Server(nameInput.value, this.serverContentInput.nativeElement.value)
    this.blueprintCreated.emit(server)
  }

}
