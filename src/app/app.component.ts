import { Component } from '@angular/core';
import { AppNavbar } from "./components/navbar/navbar.component";
import { AppHeader } from './components/header/header.component';
import { AppWorkspace } from './pages/workspace/workspace.component';

@Component({
  selector: 'app-root',
  imports: [AppNavbar, AppHeader, AppWorkspace],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'projeto-angular-karlismar';
}
