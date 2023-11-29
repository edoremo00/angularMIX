import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AccountService],
})
export class AppComponent implements OnInit {
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
  accounts: { name: string; status: string }[] = [];
  constructor(private accountsSrv: AccountService) {}
  ngOnInit(): void {
    this.accounts = this.accountsSrv.accounts;
  }
}
