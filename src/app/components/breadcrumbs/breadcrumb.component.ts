import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    standalone: true,
    imports: [Breadcrumb, RouterModule],
})
export class AppBreadcrumb implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', url: '/' },
            { label: 'Workspace', url: '/workspace' },
        ];
    }
}