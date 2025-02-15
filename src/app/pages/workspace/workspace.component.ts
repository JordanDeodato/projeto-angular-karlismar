
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AppCard } from '../../components/card/card.component';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    standalone: true,
    imports: [CardModule, AppCard],
})
export class AppWorkspace {}