import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private spinnerService: SpinnerService){}
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  ngOnInit() {
    this.spinnerService.setLoading(false);
  }
}
