import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  //@Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    //private loggingService: LoggingService,
    private accountSrv: AccountService
  ) {}
  ngOnInit(): void {
    this.accountSrv.statusUpdated.subscribe((status: string) =>
      alert(`New Status ${status}`)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountSrv.addAccount({ name: accountName, status: accountStatus });
    //this.loggingService.logStatusChange(accountStatus);
  }
}
