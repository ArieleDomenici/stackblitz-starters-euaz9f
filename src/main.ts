
import 'zone.js/dist/zone';
import { Component } from './root/root.component';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

export class App {
  name = 'Angular';
}

bootstrapApplication(RootComponent);
