import { Component } from "@angular/core";
import { AppBreadcrumb } from "../breadcrumbs/breadcrumb.component";
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-header',
    imports: [AppBreadcrumb, ButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class AppHeader {}