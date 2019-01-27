import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: Server;

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on change called', changes)
  }

  ngOnInit() {
    console.log('on init called')
  }

  ngDoCheck() {
    console.log('on doCheck called')
  }

  ngAfterContentInit() {
    console.log('on AfterContentInit called')
  }

  ngAfterContentChecked() {
    console.log('on AfterContentChecked called')
  }

  ngAfterViewInit() {
    console.log('on AfterViewInit called')
  }

  ngAfterViewChecked() {
    console.log('on AfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('on destroy called')
  }

}
