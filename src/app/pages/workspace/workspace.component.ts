
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AppCard } from '../../components/card/card.component';
import { AppModal } from "../../components/modal/modal.component";

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    standalone: true,
    imports: [CardModule, AppCard, AppModal],
})
export class AppWorkspace {}