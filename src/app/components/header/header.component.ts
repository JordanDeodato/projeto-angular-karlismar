import { Component, ViewChild } from "@angular/core";
import { AppBreadcrumb } from "../breadcrumbs/breadcrumb.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AppModal } from "../modal/modal.component";

@Component({
    selector: 'app-header',
    imports: [AppBreadcrumb, ButtonModule, CommonModule, AppModal],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class AppHeader {

    @ViewChild(AppModal) modal!: AppModal;

    showAddWorkspaceModal() {
        this.modal.show();
    }

    headers = [
        {
            title: "Workspace"
        }
    ]
}