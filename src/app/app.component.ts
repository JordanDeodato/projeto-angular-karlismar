import { Component } from '@angular/core';
import { AppNavbar } from "./components/navbar/navbar.component";
import { AppHeader } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [AppNavbar, AppHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'projeto-angular-karlismar';
}
