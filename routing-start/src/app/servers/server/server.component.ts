import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //sono stringhe
    // const id = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(+id);
    // this.route.params.subscribe(
    //   (params) => (this.server = this.serversService.getServer(+params['id']))
    // );

    //dal momento che resolve guard chiama un metodo sincrono posso trnaquillamente acccedere ai
    //suoi dati tramite lo snapshot invece di sottoscrivermi all'observable direttamente
    // this.route.data.subscribe((data) => {
    //   this.server = data['server'];
    // });
    console.log('prova', this.route.snapshot.data['server']);

    this.server = this.route.snapshot.data['server'];
  }

  onEditServer() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
