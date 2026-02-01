// src/app/app.component.ts
import { Component } from '@angular/core';
import { AvatarCreatorComponent } from './avatar-creator/avatar-creator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvatarCreatorComponent],
  template: `
    <app-avatar-creator></app-avatar-creator>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  title = 'avatar';
}