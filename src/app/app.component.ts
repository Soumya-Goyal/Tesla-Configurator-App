import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterModule, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Car Configurator';

}
