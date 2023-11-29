import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  errormessage: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //data serve per passare dati statici alle pagine
    this.errormessage = this.route.snapshot.data['message'];
  }
}
