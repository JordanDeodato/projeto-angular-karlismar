import { Component } from "@angular/core";
import { AppBreadcrumb } from "../breadcrumbs/breadcrumb.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [AppBreadcrumb, ButtonModule, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class AppHeader {
    headers = [
        {
            title: "Workspace"
        }
    ]
}