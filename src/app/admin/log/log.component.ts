import { NotificationService } from './../../core/service/notification-service/notification.service';
import { Component, OnInit } from '@angular/core';
import { LogService } from '@app/core/service/log-service/log.service';
import { LogEntry } from '@app/core/interfaces/log/log-entry'

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  logs: LogEntry[] = [];
  filteredLogs: LogEntry[] = [];
  searchTerm: string = '';
  levels: string[] = ['All', 'Error', 'Warning', 'Info', 'Database'];
  selectedLevel: string = 'All';

  constructor(private logService: LogService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.loadAllLogs();
  }

  loadAllLogs() {
    this.logService.getLogs().subscribe({
      next: (value) => {
        if (value.success) {
          this.logs = this.processLogs(value.data);
          this.filteredLogs = this.logs;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  processLogs(logs: string[]): LogEntry[] {
    const processedLogs: LogEntry[] = [];
    let currentLog: LogEntry | null = null;

    logs.forEach((log, index) => {
      const match = log.match(/^(\d{1,2}\/\d{1,2}\/\d{4}) (\d{2}:\d{2}:\d{2}): (.+)$/);
      if (match) {
        if (currentLog) {
          processedLogs.push(currentLog);
        }
        currentLog = {
          id: index,
          date: match[1],
          time: match[2],
          message: [match[3]],
          level: this.determineLogLevel(match[3])
        };
      } else if (currentLog) {
        currentLog.message.push(log.trim());
      }
    });

    if (currentLog) {
      processedLogs.push(currentLog);
    }

    return processedLogs;
  }

  determineLogLevel(message: string): string {
    if (message.includes('ERROR')) return 'Error';
    if (message.includes('WARNING')) return 'Warning';
    if (message.includes('Executed DbCommand')) return 'Database';
    return 'Info';
  }

  filterLogs() {
    this.filteredLogs = this.logs.filter(log =>
      (this.selectedLevel === 'All' || log.level === this.selectedLevel) &&
      (
        log.message.some(line => line.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        log.date.includes(this.searchTerm) ||
        log.time.includes(this.searchTerm)
      )
    );
  }

  clearLogs() {
    this.logService.clearLogs().subscribe({
      next: (value) => {
        if (value) {
          this.loadAllLogs();
          this.notificationService.showSuccess('Se ha limpiado correctamente los logs.', 'Limpieza de logs');
        }
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
}
