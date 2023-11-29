import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  constructor(
    //private loggingService: LoggingService,
    private accountSrv: AccountService
  ) {}

  onSetTo(status: string) {
    //this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountSrv.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
    this.accountSrv.statusUpdated.emit(status);
  }
}
