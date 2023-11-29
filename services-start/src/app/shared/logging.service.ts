import { Injectable } from '@angular/core';

export class LoggingService {
  logStatusChange(newstatus: string) {
    console.log('A server status changed, new status: ' + newstatus);
  }
}
