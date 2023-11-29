import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private activeroute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.activeroute.snapshot.params['id'],
      name: this.activeroute.snapshot.params['name'],
    };

    this.activeroute.params.subscribe({
      next: (params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      },
    });
  }
}
