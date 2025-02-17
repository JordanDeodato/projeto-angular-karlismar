import { Component, EventEmitter, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

interface Status {
    name: string;
}

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule, Select, TextareaModule]
})

export class AppModal {
    visible: boolean = false;

    @Output() onVisibilityChange = new EventEmitter<boolean>();

    show() {
        this.visible = true;
        this.onVisibilityChange.emit(this.visible);
    }

    hide() {
        this.visible = false;
        this.onVisibilityChange.emit(this.visible);
    }

    status: Status[] | undefined;

    selectedStatus: Status | undefined;

    ngOnInit() {
        this.status = [
            { name: 'Disponível' },
            { name: 'Em uso' },
            { name: 'Cancelado' },
            { name: 'Quarentena' },
        ];
    }
}