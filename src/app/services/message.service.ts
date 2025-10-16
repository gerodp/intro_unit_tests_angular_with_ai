import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private history: string[] = [];

  add(message: string): void {
    this.history.push(message);
  }

  clear(): void {
    this.history = [];
  }

  get all(): readonly string[] {
    return this.history;
  }
}
