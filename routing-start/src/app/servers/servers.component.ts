import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerService } from 'src/app/spinner/spinner.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    this.spinnerService.setLoading(true);
  }

  onReloadPage() {
    //this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
