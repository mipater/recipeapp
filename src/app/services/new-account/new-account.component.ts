import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoggingService} from '../../shared/logging.service';
import {AccountService} from '../../shared/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent  {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountService: AccountService) {
    accountService.statusUpdateEvent.subscribe(
      (status: string) => console.log('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

}
